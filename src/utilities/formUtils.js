const getEmailEntries = () => Array.from(document.getElementsByClassName('input-row')).map(e => e.value);

const submitValues = values => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('submitting values', () => {
        console.log(xhr.responseText);
    });
    xhr.open('POST', process.env.REACT_APP_APIURL);
    xhr.setRequestHeader('X-Api-Key', process.env.REACT_APP_APIKEY);
    xhr.send(JSON.stringify(values));
};

export const submitFormEntries = ({surveyName, url}) => {
    console.log(surveyName, url, getEmailEntries());
    // submitValues({submitValues, url, emails: getEmailEntries()});
}
