const parseString = string => string.S;
const parseStringSet = ss => ss.SS;

const parseData = data => data.map(d => ({
    name: parseString(d.name),
    emails: parseStringSet(d.emails)
}));
module.exports = parseData;