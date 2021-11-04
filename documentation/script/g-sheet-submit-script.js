const sendEmail = () => {
    const url = REDUCE_EMAIL_ENDPOINT;
    const data = { email: FormApp.getActiveForm().getResponses().map(r => r.getRespondentEmail()) };
    const lastIndex = data.email.length - 1;
    const options = {
      method: "post",
      headers: {
        "X-Api-Key": API_KEY
      },
      payload: JSON.stringify(data.email[lastIndex])
    };
    const response = UrlFetchApp.fetch(url, options);
    return response;
  }
  