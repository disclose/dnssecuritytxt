(function () {
  "use strict";

  var form = document.getElementById("record-form");
  var output = document.getElementById("generated-records");
  var message = document.getElementById("builder-message");
  var expires = document.getElementById("expires");

  function defaultExpiry() {
    var date = new Date();
    date.setUTCDate(date.getUTCDate() + 180);
    date.setUTCHours(0, 0, 0, 0);
    return date.toISOString().replace(".000", "");
  }

  if (expires && !expires.value) expires.value = defaultExpiry();

  function cleanDomain(value) {
    return value.trim()
      .replace(/^https?:\/\//i, "")
      .replace(/^_security\./i, "")
      .replace(/[\/.]+$/, "");
  }

  function line(owner, value) {
    return owner + ". 3600 IN TXT\n  \"" + value.replace(/\"/g, "\\\"") + "\"";
  }

  function render() {
    if (!form || !output) return;
    var data = new FormData(form);
    var domain = cleanDomain(String(data.get("domain") || "example.com"));
    var contact = String(data.get("contact") || "").trim();
    var policy = String(data.get("policy") || "").trim();
    var expiry = String(data.get("expires") || "").trim();
    var owner = "_security." + (domain || "example.com");
    var records = [];

    if (contact) records.push(line(owner, "security_contact=" + contact));
    if (policy) records.push(line(owner, "security_policy=" + policy));
    if (expiry) records.push(line(owner, "security_expires=" + expiry));

    output.textContent = records.join("\n");

    var expiryValid = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(expiry);
    if (message) {
      message.textContent = expiryValid
        ? "Values update as you type. Confirm them before publishing."
        : "Expiration must use RFC 3339 UTC, for example 2027-01-01T00:00:00Z.";
      message.classList.toggle("is-warning", !expiryValid);
    }
  }

  if (form) form.addEventListener("input", render);
  render();

  document.querySelectorAll("[data-copy-target]").forEach(function (button) {
    button.addEventListener("click", function () {
      var target = document.getElementById(button.getAttribute("data-copy-target"));
      if (!target) return;
      navigator.clipboard.writeText(target.innerText).then(function () {
        var original = button.textContent;
        button.textContent = "Copied";
        window.setTimeout(function () { button.textContent = original; }, 1400);
      }).catch(function () {
        if (message) message.textContent = "Copy failed. Select the records manually.";
      });
    });
  });
})();
