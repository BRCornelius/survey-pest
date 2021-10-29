const getEmailList = (ddb, tableName, handleError, callback) => {
    const getParams = {
      TableName: tableName
    };
    ddb.scan(getParams, function (err, data) {
        if (err) { 
            handleError(err);
        }
        if (data) {
            callback(data.Items);
        }
    });
};

module.exports = getEmailList;