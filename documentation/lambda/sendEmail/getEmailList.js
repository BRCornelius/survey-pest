const getEmailList = (ddb, surveyName, handleError, callback) => {
    const getParams = {
      TableName: surveyName
    };
    ddb.scan(getParams, function (err, data) {
        if (err) { 
            handleError(err);
        }
        if (data) {
            callback(data);
        }
    });
};

module.exports = getEmailList;