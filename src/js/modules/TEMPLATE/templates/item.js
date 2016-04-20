function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (href) {
buf.push("<div class=\"some\"><a" + (jade.attr("href", "" + (href) + "", true, false)) + ">Link2</a></div>");}.call(this,"href" in locals_for_with?locals_for_with.href:typeof href!=="undefined"?href:undefined));;return buf.join("");
}