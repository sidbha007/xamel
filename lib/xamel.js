var xml = require('./xml');
module.exports = {
    parse : require('./parse'),
    serialize : require('./serialize').serialize,
    NodeSet: xml.NodeSet,
    Tag: xml.Tag
};
