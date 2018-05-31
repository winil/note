/*提示层,加载层*/
var layer = {
	msg: function(text) {
		var body = $("body");
		body.find(".layui-hf").remove();
		var html = '<div class="layui-hf layui-hf-dialog">'+
		'<div class="layui-hf-hui">'+
		'<div class="layui-hf-content">'+text+'</div>'+
		'</div></div>';
		body.append(html);
	},
	loading: function(text){
		var body = $("body");
		var html = '<div class="ui-dialog ui-dialog-notice show">'+
		'<div class="ui-dialog-cnt">'+
		'<i class="ui-loading-bright"></i>'+
		'<p class="ui-loading-text">'+text+'</p>'+
		'</div></div>';
		body.prepend(html);
		setTimeout(function(){body.find(".ui-dialog").remove()},800);
	}
}

$(function(){
	//头部返回
	$('.dir-left').on('click',function(){
		window.history.go(-1);
	})
})


