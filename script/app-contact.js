/* ==========================================================
   CONTACT FORM — VALIDATION
   - Shows inline messages under each field while user types
   - Blocks submission if any rule fails
   - On success: resets the form and shows a short success text
   ========================================================== */

/* Write a message into the <small class="error" data-for="..."> of a field */
function showError(key, msg) {
  var el = document.querySelector('.error[data-for="' + key + '"]');
  if (el) el.textContent = msg || '';
}

/* Very small email pattern check (simple regex) */
function isEmail(str) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(str);
}

/* Field validators: return true or an error string */
function validateName(v)    { return v.trim().length >= 2 ? true : 'Please enter your full name.'; }
function validateEmail(v)   { return isEmail(v) ? true : 'Enter a valid email address.'; }
function validateSubject(v) { return v.trim().length >= 3 ? true : 'Subject should be at least 3 characters.'; }
function validateTopic(v)   { return v.trim().length > 0 ? true : 'Please select a topic.'; }
function validateMessage(v) { return v.trim().length >= 10 ? true : 'Message should be at least 10 characters.'; }
function validateConsent(v) { return v === true ? true : 'Please agree to be contacted.'; }

/* Grab the form and inputs once */
var form = document.getElementById('contactForm');

if (form) {
  var nameEl    = document.getElementById('name');
  var emailEl   = document.getElementById('email');
  var subjectEl = document.getElementById('subject');
  var topicEl   = document.getElementById('topic');
  var messageEl = document.getElementById('message');
  var consentEl = document.getElementById('consent');

  /* Live validation while typing/changing */
  if (nameEl) {
    nameEl.addEventListener('input', function () {
      var r = validateName(nameEl.value);
      showError('name', r === true ? '' : r);
    });
  }

  if (emailEl) {
    emailEl.addEventListener('input', function () {
      var r = validateEmail(emailEl.value);
      showError('email', r === true ? '' : r);
    });
  }

  if (subjectEl) {
    subjectEl.addEventListener('input', function () {
      var r = validateSubject(subjectEl.value);
      showError('subject', r === true ? '' : r);
    });
  }

  if (topicEl) {
    topicEl.addEventListener('change', function () {
      var r = validateTopic(topicEl.value);
      showError('topic', r === true ? '' : r);
    });
  }

  if (messageEl) {
    messageEl.addEventListener('input', function () {
      var r = validateMessage(messageEl.value);
      showError('message', r === true ? '' : r);
    });
  }

  if (consentEl) {
    consentEl.addEventListener('change', function () {
      var r = validateConsent(consentEl.checked);
      showError('consent', r === true ? '' : r);
    });
  }

  /* Final check on submit (demo: prevent real post) */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var ok = true;

    var r1 = validateName(nameEl.value);
    showError('name', r1 === true ? '' : r1);
    if (r1 !== true) ok = false;

    var r2 = validateEmail(emailEl.value);
    showError('email', r2 === true ? '' : r2);
    if (r2 !== true) ok = false;

    var r3 = validateSubject(subjectEl.value);
    showError('subject', r3 === true ? '' : r3);
    if (r3 !== true) ok = false;

    var r4 = validateTopic(topicEl.value);
    showError('topic', r4 === true ? '' : r4);
    if (r4 !== true) ok = false;

    var r5 = validateMessage(messageEl.value);
    showError('message', r5 === true ? '' : r5);
    if (r5 !== true) ok = false;

    var r6 = validateConsent(consentEl.checked);
    showError('consent', r6 === true ? '' : r6);
    if (r6 !== true) ok = false;

    /* Abort if any rule failed */
    if (!ok) return;

    /* Success: clear form and briefly show a status message */
    form.reset();
    var success = document.querySelector('.form-success');
    if (success) {
      success.hidden = false;
      setTimeout(function () { success.hidden = true; }, 4000);
    }
  });
}
