const getEmailEntries = () => Array.from(document.getElementsByClassName('input-row')).map(e => e.value);

export const submitFormEntries = ({surveyName, url}) => {
    console.log(surveyName, url, getEmailEntries())
}
