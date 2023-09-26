// Garden Gnome Software - Skin
// Pano2VR 6.1.11/18043
// Filename: dinoball.ggsk
// Generated 2021-05-07T08:46:03

function pano2vrSkin(player,base) {
	player.addVariable('backsound', 2, true);
	player.addVariable('vis_active_skin', 2, false);
	player.addVariable('activated_menu', 2, false);
	player.addVariable('the_dig', 2, false);
	player.addVariable('the_lab', 2, false);
	player.addVariable('the_institute', 2, false);
	player.addVariable('the_mount', 2, false);
	player.addVariable('video_iframe', 2, false);
	player.addVariable('image_iframe', 2, false);
	player.addVariable('crew_iframe', 2, false);
	player.addVariable('arrival_iframe', 2, false);
	player.addVariable('green_iframe', 2, false);
	player.addVariable('library_iframe', 2, false);
	player.addVariable('skeleton_iframe', 2, false);
	player.addVariable('gallery_1', 1, 1);
	player.addVariable('gallery_2', 1, 1);
	player.addVariable('gallery_3', 1, 1);
	player.addVariable('start', 2, true);
	player.addVariable('ht_pulse', 2, false);
	player.addVariable('img_nodechange', 2, false);
	player.addVariable('vis_container_link', 2, false);
	player.addVariable('img_link', 2, false);
	player.addVariable('url_iframe', 2, false);
	player.addVariable('UA_ID', 0, "UA-189483986-16");
	player.addVariable('UA_category', 0, "Dino_Ball");
	player.addVariable('welcome_msg', 2, false);
	player.addVariable('donors_msg', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/dig__o.png';
		preLoadImg.src=basePath + 'images/lab__o.png';
		preLoadImg.src=basePath + 'images/mount__o.png';
		preLoadImg.src=basePath + 'images/dig_stop3_tab__o.png';
		preLoadImg.src=basePath + 'images/dig_stop3b__o.png';
		preLoadImg.src=basePath + 'images/dig_stop3c__o.png';
		preLoadImg.src=basePath + 'images/dig_stop3d__o.png';
		preLoadImg.src=basePath + 'images/start_button__o.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._background=document.createElement('div');
		el.ggId="Background";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._background.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._background);
		el=me._active_skin=document.createElement('div');
		el.ggId="Active Skin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._active_skin.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._active_skin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_active_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_active_skin') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._active_skin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._active_skin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._active_skin.style[domTransition]='';
				if (me._active_skin.ggCurrentLogicStateVisible == 0) {
					me._active_skin.style.visibility=(Number(me._active_skin.style.opacity)>0||!me._active_skin.style.opacity)?'inherit':'hidden';
					me._active_skin.ggVisible=true;
				}
				else if (me._active_skin.ggCurrentLogicStateVisible == 1) {
					me._active_skin.style.visibility="hidden";
					me._active_skin.ggVisible=false;
				}
				else {
					me._active_skin.style.visibility="hidden";
					me._active_skin.ggVisible=false;
				}
			}
		}
		me._active_skin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._menu=document.createElement('div');
		el.ggId="menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu.style[domTransition]='left 0s, bottom 0s, ' + cssPrefix + 'transform 0s';
				if (me._menu.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._menu.style.bottom='5px';
					me._menu.ggUpdatePosition(true);
				}
				else {
					me._menu.ggDx=0;
					me._menu.style.bottom='30px';
					me._menu.ggUpdatePosition(true);
				}
			}
		}
		me._menu.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._menu.style[domTransition]='left 0s, bottom 0s, ' + cssPrefix + 'transform 0s';
				if (me._menu.ggCurrentLogicStateScaling == 0) {
					me._menu.ggParameter.sx = 0.7;
					me._menu.ggParameter.sy = 0.7;
					me._menu.style[domTransform]=parameterToTransform(me._menu.ggParameter);
				}
				else {
					me._menu.ggParameter.sx = 1;
					me._menu.ggParameter.sy = 1;
					me._menu.style[domTransform]=parameterToTransform(me._menu.ggParameter);
				}
			}
		}
		me._menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._info_1=document.createElement('div');
		els=me._info_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzUyODMwRTt9JiN4ZDsKCS5zdDF7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMi41LDExLjNjLTYuMSwwLTExLDUtMTEsMTEuMnM0LjksMTEuMiwxMSwxMS4yczExLTUsMTEtMTEuMlMyOC42LDExLjMsMjIuNSwxMS4zeiBNMjIuNSwzMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTUsMC05LTQuMS05LTkuMnM0LTku'+
			'Miw5LTkuMnM5LDQuMSw5LDkuMlMyNy41LDMxLjcsMjIuNSwzMS43eiIvPgogIDxyZWN0IGNsYXNzPSJzdDEiIHk9IjIwLjUiIHdpZHRoPSIyIiB4PSIyMS41IiBoZWlnaHQ9IjcuMyIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMi41LDE3LjJjLTAuNywwLTEuMiwwLjUtMS4yLDEuMmMwLDAuNiwwLjUsMS4yLDEuMiwxLjJzMS4yLTAuNiwxLjItMS4yQzIzLjcsMTcuNywyMy4yLDE3LjIsMjIuNSwxNy4yeiIvPgogPC9nPgo8L3N2Zz4K';
		me._info_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwYXRoIGQ9Ik0yMi41LDExLjNjLTYuMSwwLTExLDUtMTEsMTEuMnM0LjksMTEuMiwxMSwxMS4yczExLTUsMTEtMTEuMlMyOC42LDExLjMsMjIuNSwxMS4zeiBNMjIuNSwzMS43Yy01LDAtOS00LjEtOS05LjImI3hkOyYjeGE7JiN4OTsmI3g5O3M0LTkuMiw5LTkuMnM5LDQu'+
			'MSw5LDkuMlMyNy41LDMxLjcsMjIuNSwzMS43eiIvPgogIDxyZWN0IHk9IjIwLjUiIHdpZHRoPSIyIiB4PSIyMS41IiBoZWlnaHQ9IjcuMyIvPgogIDxwYXRoIGQ9Ik0yMi41LDE3LjJjLTAuNywwLTEuMiwwLjUtMS4yLDEuMmMwLDAuNiwwLjUsMS4yLDEuMiwxLjJzMS4yLTAuNiwxLjItMS4yQzIzLjcsMTcuNywyMy4yLDE3LjIsMjIuNSwxNy4yeiIvPgogPC9nPgo8L3N2Zz4K';
		me._info_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_1.onclick=function (e) {
			me._instructions.style[domTransition]='none';
			me._instructions.style.visibility=(Number(me._instructions.style.opacity)>0||!me._instructions.style.opacity)?'inherit':'hidden';
			me._instructions.ggVisible=true;
			player.setVariableValue('vis_active_skin', false);
			gtag('event', 'Info Button Clicked', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'Info_Button'
});
		}
		me._info_1.onmouseover=function (e) {
			me._info_1__img.style.visibility='hidden';
			me._info_1__imgo.style.visibility='inherit';
			me.elementMouseOver['info_1']=true;
			me._tt_info.logicBlock_visible();
		}
		me._info_1.onmouseout=function (e) {
			me._info_1__img.style.visibility='inherit';
			me._info_1__imgo.style.visibility='hidden';
			me.elementMouseOver['info_1']=false;
			me._tt_info.logicBlock_visible();
		}
		me._info_1.ontouchend=function (e) {
			me.elementMouseOver['info_1']=false;
			me._tt_info.logicBlock_visible();
		}
		me._info_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_info=document.createElement('div');
		els=me._tt_info__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_info";
		el.ggDx=0;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Instructions";
		el.appendChild(els);
		me._tt_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['info_1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_info.style[domTransition]='';
				if (me._tt_info.ggCurrentLogicStateVisible == 0) {
					me._tt_info.style.visibility=(Number(me._tt_info.style.opacity)>0||!me._tt_info.style.opacity)?'inherit':'hidden';
					me._tt_info.ggVisible=true;
				}
				else {
					me._tt_info.style.visibility="hidden";
					me._tt_info.ggVisible=false;
				}
			}
		}
		me._tt_info.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('spanish') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_info.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_info.ggCurrentLogicStateText = newLogicStateText;
				me._tt_info.style[domTransition]='';
				if (me._tt_info.ggCurrentLogicStateText == 0) {
					me._tt_info.ggText="Instrucciones";
					me._tt_info__text.innerHTML=me._tt_info.ggText;
					if (me._tt_info.ggUpdateText) {
					me._tt_info.ggUpdateText=function() {
						var hs="Instrucciones";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_info.ggUpdatePosition) me._tt_info.ggUpdatePosition();
					}
				}
				else {
					me._tt_info.ggText="Instructions";
					me._tt_info__text.innerHTML=me._tt_info.ggText;
					if (me._tt_info.ggUpdateText) {
					me._tt_info.ggUpdateText=function() {
						var hs="Instructions";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_info.ggUpdatePosition) me._tt_info.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._info_1.appendChild(me._tt_info);
		me._menu.appendChild(me._info_1);
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzUyODMwRTt9JiN4ZDsKCS5zdDF7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNS4xLDM2aC05LjJ2LTJoNy40di03LjRoMnY5LjJWMzZIMzUuMXogTTE5LjEsMzZIOS45SDkuN3YtMC4ydi05LjJoMlYzNGg3LjRWMzZ6IE0zNS4zLDE4LjRoLTJWMTFoLTcuNFY5JiN4ZDsmI3hhOyYjeDk7JiN4OTtoOS4yaDAuMnYw'+
			'LjJWMTguNHogTTExLjcsMTguNGgtMlY5LjNWOWgwLjJoOS4ydjJoLTcuNEMxMS43LDExLDExLjcsMTguNCwxMS43LDE4LjR6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwYXRoIGQ9Ik0zNS4xLDM2aC05LjJ2LTJoNy40di03LjRoMnY5LjJWMzZIMzUuMXogTTE5LjEsMzZIOS45SDkuN3YtMC4ydi05LjJoMlYzNGg3LjRWMzZ6IE0zNS4zLDE4LjRoLTJWMTFoLTcuNFY5aDkuMmgwLjJ2MC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtWMTguNHogTTEx'+
			'LjcsMTguNGgtMlY5LjNWOWgwLjJoOS4ydjJoLTcuNEMxMS43LDExLDExLjcsMTguNCwxMS43LDE4LjR6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Fullscreen";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen.style[domTransition]='';
				if (me._fullscreen.ggCurrentLogicStateVisible == 0) {
					me._fullscreen.style.visibility="hidden";
					me._fullscreen.ggVisible=false;
				}
				else {
					me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
					me._fullscreen.ggVisible=true;
				}
			}
		}
		me._fullscreen.onclick=function (e) {
			player.enterFullscreen();
				player.playSound("Magic Whoosh","1");
			gtag('event', 'Fullscreen', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'Fullscreen'
});
		}
		me._fullscreen.onmouseover=function (e) {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen']=true;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._fullscreen.onmouseout=function (e) {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._fullscreen.ontouchend=function (e) {
			me.elementMouseOver['fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_fullscreen=document.createElement('div');
		els=me._tt_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_fullscreen";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Enter Fullscreen";
		el.appendChild(els);
		me._tt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['fullscreen'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_fullscreen.style[domTransition]='';
				if (me._tt_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_fullscreen.style.visibility=(Number(me._tt_fullscreen.style.opacity)>0||!me._tt_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_fullscreen.ggVisible=true;
				}
				else {
					me._tt_fullscreen.style.visibility="hidden";
					me._tt_fullscreen.ggVisible=false;
				}
			}
		}
		me._tt_fullscreen.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('spanish') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_fullscreen.ggCurrentLogicStateText = newLogicStateText;
				me._tt_fullscreen.style[domTransition]='';
				if (me._tt_fullscreen.ggCurrentLogicStateText == 0) {
					me._tt_fullscreen.ggText="Pantalla Completa";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Pantalla Completa";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else {
					me._tt_fullscreen.ggText="Enter Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Enter Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._fullscreen.appendChild(me._tt_fullscreen);
		me._menu.appendChild(me._fullscreen);
		el=me._exit_fullscreen=document.createElement('div');
		els=me._exit_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzUyODMwRTt9JiN4ZDsKCS5zdDF7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yOC4xLDM1LjFoLTJ2LTkuMnYtMC4yaDAuMmg5LjJ2MmgtNy40VjM1LjF6IE0xOC45LDM1LjFoLTJ2LTcuNEg5LjV2LTJoOS4yaDAuMnYwLjImI3hkOyYjeGE7JiN4OTsmI3g5O0MxOC45LDI1LjksMTguOSwzNS4xLDE4LjksMzUuMXog'+
			'TTM1LjUsMTkuM2gtOS4yaC0wLjJ2LTAuMlY5LjloMnY3LjRoNy40VjE5LjN6IE0xOC43LDE5LjNIOS41di0yaDcuNFY5LjloMnY5LjJ2MC4ySDE4Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._exit_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._exit_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwYXRoIGQ9Ik0yOC4xLDM1LjFoLTJ2LTkuMnYtMC4yaDAuMmg5LjJ2MmgtNy40VjM1LjF6IE0xOC45LDM1LjFoLTJ2LTcuNEg5LjV2LTJoOS4yaDAuMnYwLjJDMTguOSwyNS45LDE4LjksMzUuMSwxOC45LDM1LjF6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTM1LjUsMTkuM2gt'+
			'OS4yaC0wLjJ2LTAuMlY5LjloMnY3LjRoNy40VjE5LjN6IE0xOC43LDE5LjNIOS41di0yaDcuNFY5LjloMnY5LjJ2MC4ySDE4Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._exit_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Exit Fullscreen";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._exit_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._exit_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._exit_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._exit_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._exit_fullscreen.style[domTransition]='';
				if (me._exit_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._exit_fullscreen.style.visibility="hidden";
					me._exit_fullscreen.ggVisible=false;
				}
				else {
					me._exit_fullscreen.style.visibility=(Number(me._exit_fullscreen.style.opacity)>0||!me._exit_fullscreen.style.opacity)?'inherit':'hidden';
					me._exit_fullscreen.ggVisible=true;
				}
			}
		}
		me._exit_fullscreen.onclick=function (e) {
			player.exitFullscreen();
				player.playSound("Magic Whoosh","1");
			gtag('event', 'Exit Fullscreen', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'Exit_Fullscreen'
});
		}
		me._exit_fullscreen.onmouseover=function (e) {
			me._exit_fullscreen__img.style.visibility='hidden';
			me._exit_fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['exit_fullscreen']=true;
			me._tt_fullscreen2.logicBlock_visible();
		}
		me._exit_fullscreen.onmouseout=function (e) {
			me._exit_fullscreen__img.style.visibility='inherit';
			me._exit_fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['exit_fullscreen']=false;
			me._tt_fullscreen2.logicBlock_visible();
		}
		me._exit_fullscreen.ontouchend=function (e) {
			me.elementMouseOver['exit_fullscreen']=false;
			me._tt_fullscreen2.logicBlock_visible();
		}
		me._exit_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_fullscreen2=document.createElement('div');
		els=me._tt_fullscreen2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_fullscreen2";
		el.ggDx=0;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Exit Fullscreen";
		el.appendChild(els);
		me._tt_fullscreen2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_fullscreen2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('spanish') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_fullscreen2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_fullscreen2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_fullscreen2.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen2.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -65;
					me._tt_fullscreen2.ggUpdatePosition(true);
				}
				else {
					me._tt_fullscreen2.ggDx=0;
					me._tt_fullscreen2.ggDy=-30;
					me._tt_fullscreen2.ggUpdatePosition(true);
				}
			}
		}
		me._tt_fullscreen2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['exit_fullscreen'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_fullscreen2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_fullscreen2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_fullscreen2.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen2.ggCurrentLogicStateVisible == 0) {
					me._tt_fullscreen2.style.visibility=(Number(me._tt_fullscreen2.style.opacity)>0||!me._tt_fullscreen2.style.opacity)?'inherit':'hidden';
					me._tt_fullscreen2.ggVisible=true;
				}
				else {
					me._tt_fullscreen2.style.visibility="hidden";
					me._tt_fullscreen2.ggVisible=false;
				}
			}
		}
		me._tt_fullscreen2.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('spanish') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_fullscreen2.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_fullscreen2.ggCurrentLogicStateText = newLogicStateText;
				me._tt_fullscreen2.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen2.ggCurrentLogicStateText == 0) {
					me._tt_fullscreen2.ggText="Salir de Pantalla Completa";
					me._tt_fullscreen2__text.innerHTML=me._tt_fullscreen2.ggText;
					if (me._tt_fullscreen2.ggUpdateText) {
					me._tt_fullscreen2.ggUpdateText=function() {
						var hs="Salir de Pantalla Completa";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen2.ggUpdatePosition) me._tt_fullscreen2.ggUpdatePosition();
					}
				}
				else {
					me._tt_fullscreen2.ggText="Exit Fullscreen";
					me._tt_fullscreen2__text.innerHTML=me._tt_fullscreen2.ggText;
					if (me._tt_fullscreen2.ggUpdateText) {
					me._tt_fullscreen2.ggUpdateText=function() {
						var hs="Exit Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen2.ggUpdatePosition) me._tt_fullscreen2.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_fullscreen2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._exit_fullscreen.appendChild(me._tt_fullscreen2);
		me._menu.appendChild(me._exit_fullscreen);
		me._active_skin.appendChild(me._menu);
		el=me._navigation_bar=document.createElement('div');
		el.ggId="NAVIGATION_BAR";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(60vw*0.1980);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._navigation_bar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._navigation_bar.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('activated_menu') == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getVariableValue('activated_menu') == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getViewerSize().width >= 1024)) && 
				((player.getVariableValue('activated_menu') == true)) && 
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._navigation_bar.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._navigation_bar.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._navigation_bar.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._navigation_bar.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -20;
					me._navigation_bar.ggUpdatePosition(true);
				}
				else if (me._navigation_bar.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 0;
					this.ggDy = -10;
					me._navigation_bar.ggUpdatePosition(true);
				}
				else if (me._navigation_bar.ggCurrentLogicStatePosition == 2) {
					this.ggDx = 0;
					this.ggDy = -20;
					me._navigation_bar.ggUpdatePosition(true);
				}
				else {
					me._navigation_bar.ggDx=0;
					me._navigation_bar.ggDy=0;
					me._navigation_bar.ggUpdatePosition(true);
				}
			}
		}
		me._navigation_bar.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('activated_menu') == true)) && 
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getVariableValue('activated_menu') == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width >= 1024)) && 
				((player.getIsMobile() == true)) && 
				((player.getVariableValue('activated_menu') == true))
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._navigation_bar.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._navigation_bar.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._navigation_bar.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._navigation_bar.ggCurrentLogicStateScaling == 0) {
					me._navigation_bar.ggParameter.sx = 0.3;
					me._navigation_bar.ggParameter.sy = 0.3;
					me._navigation_bar.style[domTransform]=parameterToTransform(me._navigation_bar.ggParameter);
				}
				else if (me._navigation_bar.ggCurrentLogicStateScaling == 1) {
					me._navigation_bar.ggParameter.sx = 0.5;
					me._navigation_bar.ggParameter.sy = 0.5;
					me._navigation_bar.style[domTransform]=parameterToTransform(me._navigation_bar.ggParameter);
				}
				else if (me._navigation_bar.ggCurrentLogicStateScaling == 2) {
					me._navigation_bar.ggParameter.sx = 0.5;
					me._navigation_bar.ggParameter.sy = 0.5;
					me._navigation_bar.style[domTransform]=parameterToTransform(me._navigation_bar.ggParameter);
				}
				else if (me._navigation_bar.ggCurrentLogicStateScaling == 3) {
					me._navigation_bar.ggParameter.sx = 0.5;
					me._navigation_bar.ggParameter.sy = 0.5;
					me._navigation_bar.style[domTransform]=parameterToTransform(me._navigation_bar.ggParameter);
				}
				else {
					me._navigation_bar.ggParameter.sx = 1;
					me._navigation_bar.ggParameter.sy = 1;
					me._navigation_bar.style[domTransform]=parameterToTransform(me._navigation_bar.ggParameter);
				}
			}
		}
		me._navigation_bar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._line1=document.createElement('div');
		el.ggId="line1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 7px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._line1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._navigation_bar.appendChild(me._line1);
		el=me._line2=document.createElement('div');
		el.ggId="line2";
		el.ggDx=-270;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 7px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._line2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._navigation_bar.appendChild(me._line2);
		el=me._line3=document.createElement('div');
		el.ggId="line3";
		el.ggDx=270;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 7px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._line3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._navigation_bar.appendChild(me._line3);
		el=me._dig=document.createElement('div');
		els=me._dig__img=document.createElement('img');
		els.className='ggskin ggskin_dig';
		hs=basePath + 'images/dig.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/dig__o.png';
		me._dig__img.ggOverSrc=hs;
		el.ggId="DIG";
		el.ggDx=-405;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 200px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dig.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dig.onclick=function (e) {
			player.openNext("{node7}","");
			player.setVariableValue('activated_menu', true);
			player.setVariableValue('the_dig', true);
			player.setVariableValue('the_mount', false);
			player.setVariableValue('the_institute', false);
			player.setVariableValue('the_lab', false);
			me._dig_2.style[domTransition]='none';
			me._dig_2.style.visibility=(Number(me._dig_2.style.opacity)>0||!me._dig_2.style.opacity)?'inherit':'hidden';
			me._dig_2.ggVisible=true;
			me._lab_2.style[domTransition]='none';
			me._lab_2.style.visibility='hidden';
			me._lab_2.ggVisible=false;
			me._institute_2.style[domTransition]='none';
			me._institute_2.style.visibility='hidden';
			me._institute_2.ggVisible=false;
			me._mount_2.style[domTransition]='none';
			me._mount_2.style.visibility='hidden';
			me._mount_2.ggVisible=false;
		}
		me._dig.onmouseover=function (e) {
			me._dig__img.src=me._dig__img.ggOverSrc;
		}
		me._dig.onmouseout=function (e) {
			me._dig__img.src=me._dig__img.ggNormalSrc;
		}
		me._dig.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_dig=document.createElement('div');
		els=me._tt_dig__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_dig";
		el.ggDx=0;
		el.ggDy=55;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 15%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 26px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="THE DIG";
		el.appendChild(els);
		me._tt_dig.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_dig.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('spanish') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_dig.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_dig.ggCurrentLogicStateText = newLogicStateText;
				me._tt_dig.style[domTransition]='';
				if (me._tt_dig.ggCurrentLogicStateText == 0) {
					me._tt_dig.ggText="Instrucciones";
					me._tt_dig__text.innerHTML=me._tt_dig.ggText;
					if (me._tt_dig.ggUpdateText) {
					me._tt_dig.ggUpdateText=function() {
						var hs="Instrucciones";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_dig.ggUpdatePosition) me._tt_dig.ggUpdatePosition();
					}
				}
				else {
					me._tt_dig.ggText="THE DIG";
					me._tt_dig__text.innerHTML=me._tt_dig.ggText;
					if (me._tt_dig.ggUpdateText) {
					me._tt_dig.ggUpdateText=function() {
						var hs="THE DIG";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_dig.ggUpdatePosition) me._tt_dig.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_dig.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._dig.appendChild(me._tt_dig);
		me._navigation_bar.appendChild(me._dig);
		el=me._lab=document.createElement('div');
		els=me._lab__img=document.createElement('img');
		els.className='ggskin ggskin_lab';
		hs=basePath + 'images/lab.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/lab__o.png';
		me._lab__img.ggOverSrc=hs;
		el.ggId="LAB";
		el.ggDx=-135;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 200px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lab.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lab.onclick=function (e) {
			player.openNext("{node8}","");
			player.setVariableValue('activated_menu', true);
			player.setVariableValue('the_lab', true);
			player.setVariableValue('the_dig', false);
			player.setVariableValue('the_institute', false);
			player.setVariableValue('the_mount', false);
			me._mount_2.style[domTransition]='none';
			me._mount_2.style.visibility='hidden';
			me._mount_2.ggVisible=false;
			me._institute_2.style[domTransition]='none';
			me._institute_2.style.visibility='hidden';
			me._institute_2.ggVisible=false;
			me._lab_2.style[domTransition]='none';
			me._lab_2.style.visibility=(Number(me._lab_2.style.opacity)>0||!me._lab_2.style.opacity)?'inherit':'hidden';
			me._lab_2.ggVisible=true;
			me._dig_2.style[domTransition]='none';
			me._dig_2.style.visibility='hidden';
			me._dig_2.ggVisible=false;
		}
		me._lab.onmouseover=function (e) {
			me._lab__img.src=me._lab__img.ggOverSrc;
		}
		me._lab.onmouseout=function (e) {
			me._lab__img.src=me._lab__img.ggNormalSrc;
		}
		me._lab.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_lab=document.createElement('div');
		els=me._tt_lab__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_LAB";
		el.ggDx=0;
		el.ggDy=55;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 15%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 26px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="THE LAB";
		el.appendChild(els);
		me._tt_lab.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_lab.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('spanish') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_lab.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_lab.ggCurrentLogicStateText = newLogicStateText;
				me._tt_lab.style[domTransition]='';
				if (me._tt_lab.ggCurrentLogicStateText == 0) {
					me._tt_lab.ggText="Instrucciones";
					me._tt_lab__text.innerHTML=me._tt_lab.ggText;
					if (me._tt_lab.ggUpdateText) {
					me._tt_lab.ggUpdateText=function() {
						var hs="Instrucciones";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_lab.ggUpdatePosition) me._tt_lab.ggUpdatePosition();
					}
				}
				else {
					me._tt_lab.ggText="THE LAB";
					me._tt_lab__text.innerHTML=me._tt_lab.ggText;
					if (me._tt_lab.ggUpdateText) {
					me._tt_lab.ggUpdateText=function() {
						var hs="THE LAB";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_lab.ggUpdatePosition) me._tt_lab.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_lab.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._lab.appendChild(me._tt_lab);
		me._navigation_bar.appendChild(me._lab);
		el=me._institute=document.createElement('div');
		els=me._institute__img=document.createElement('img');
		els.className='ggskin ggskin_institute';
		hs=basePath + 'images/institute.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._institute__img.ggOverSrc=hs;
		el.ggId="INSTITUTE";
		el.ggDx=135;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 200px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._institute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._institute.onclick=function (e) {
			player.openNext("{node9}","");
			player.setVariableValue('activated_menu', true);
			player.setVariableValue('the_institute', true);
			player.setVariableValue('the_dig', false);
			player.setVariableValue('the_lab', false);
			player.setVariableValue('the_mount', false);
			me._mount_2.style[domTransition]='none';
			me._mount_2.style.visibility='hidden';
			me._mount_2.ggVisible=false;
			me._institute_2.style[domTransition]='none';
			me._institute_2.style.visibility=(Number(me._institute_2.style.opacity)>0||!me._institute_2.style.opacity)?'inherit':'hidden';
			me._institute_2.ggVisible=true;
			me._lab_2.style[domTransition]='none';
			me._lab_2.style.visibility='hidden';
			me._lab_2.ggVisible=false;
			me._dig_2.style[domTransition]='none';
			me._dig_2.style.visibility='hidden';
			me._dig_2.ggVisible=false;
		}
		me._institute.onmouseover=function (e) {
			me._institute__img.src=me._institute__img.ggOverSrc;
		}
		me._institute.onmouseout=function (e) {
			me._institute__img.src=me._institute__img.ggNormalSrc;
		}
		me._institute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_institute=document.createElement('div');
		els=me._tt_institute__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_INSTITUTE";
		el.ggDx=0;
		el.ggDy=55;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 15%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 110%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 26px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="THE INSTITUTE";
		el.appendChild(els);
		me._tt_institute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_institute.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('spanish') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_institute.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_institute.ggCurrentLogicStateText = newLogicStateText;
				me._tt_institute.style[domTransition]='';
				if (me._tt_institute.ggCurrentLogicStateText == 0) {
					me._tt_institute.ggText="Instrucciones";
					me._tt_institute__text.innerHTML=me._tt_institute.ggText;
					if (me._tt_institute.ggUpdateText) {
					me._tt_institute.ggUpdateText=function() {
						var hs="Instrucciones";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_institute.ggUpdatePosition) me._tt_institute.ggUpdatePosition();
					}
				}
				else {
					me._tt_institute.ggText="THE INSTITUTE";
					me._tt_institute__text.innerHTML=me._tt_institute.ggText;
					if (me._tt_institute.ggUpdateText) {
					me._tt_institute.ggUpdateText=function() {
						var hs="THE INSTITUTE";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_institute.ggUpdatePosition) me._tt_institute.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_institute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._institute.appendChild(me._tt_institute);
		me._navigation_bar.appendChild(me._institute);
		el=me._mount=document.createElement('div');
		els=me._mount__img=document.createElement('img');
		els.className='ggskin ggskin_mount';
		hs=basePath + 'images/mount.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/mount__o.png';
		me._mount__img.ggOverSrc=hs;
		el.ggId="MOUNT";
		el.ggDx=405;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 200px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mount.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mount.onclick=function (e) {
			me._cover_menu.style[domTransition]='none';
			me._cover_menu.style.visibility=(Number(me._cover_menu.style.opacity)>0||!me._cover_menu.style.opacity)?'inherit':'hidden';
			me._cover_menu.ggVisible=true;
			player.openNext("{node12}","");
			player.setVariableValue('activated_menu', true);
			player.setVariableValue('the_mount', true);
			player.setVariableValue('the_dig', false);
			player.setVariableValue('the_lab', false);
			player.setVariableValue('the_institute', false);
			me._background.style[domTransition]='none';
			me._background.style.visibility='hidden';
			me._background.ggVisible=false;
			me._timer_1.ggTimeout=Number("2") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
			me._mount_2.style[domTransition]='none';
			me._mount_2.style.visibility=(Number(me._mount_2.style.opacity)>0||!me._mount_2.style.opacity)?'inherit':'hidden';
			me._mount_2.ggVisible=true;
			me._institute_2.style[domTransition]='none';
			me._institute_2.style.visibility='hidden';
			me._institute_2.ggVisible=false;
			me._lab_2.style[domTransition]='none';
			me._lab_2.style.visibility='hidden';
			me._lab_2.ggVisible=false;
			me._dig_2.style[domTransition]='none';
			me._dig_2.style.visibility='hidden';
			me._dig_2.ggVisible=false;
		}
		me._mount.onmouseover=function (e) {
			me._mount__img.src=me._mount__img.ggOverSrc;
		}
		me._mount.onmouseout=function (e) {
			me._mount__img.src=me._mount__img.ggNormalSrc;
		}
		me._mount.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_mount=document.createElement('div');
		els=me._tt_mount__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_MOUNT";
		el.ggDx=0;
		el.ggDy=55;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 15%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 26px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="THE MOUNT";
		el.appendChild(els);
		me._tt_mount.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_mount.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('spanish') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_mount.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_mount.ggCurrentLogicStateText = newLogicStateText;
				me._tt_mount.style[domTransition]='';
				if (me._tt_mount.ggCurrentLogicStateText == 0) {
					me._tt_mount.ggText="Instrucciones";
					me._tt_mount__text.innerHTML=me._tt_mount.ggText;
					if (me._tt_mount.ggUpdateText) {
					me._tt_mount.ggUpdateText=function() {
						var hs="Instrucciones";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_mount.ggUpdatePosition) me._tt_mount.ggUpdatePosition();
					}
				}
				else {
					me._tt_mount.ggText="THE MOUNT";
					me._tt_mount__text.innerHTML=me._tt_mount.ggText;
					if (me._tt_mount.ggUpdateText) {
					me._tt_mount.ggUpdateText=function() {
						var hs="THE MOUNT";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_mount.ggUpdatePosition) me._tt_mount.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_mount.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
		}
		me._mount.appendChild(me._tt_mount);
		me._navigation_bar.appendChild(me._mount);
		el=me._dig_2=document.createElement('div');
		els=me._dig_2__img=document.createElement('img');
		els.className='ggskin ggskin_dig_2';
		hs=basePath + 'images/dig_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="DIG_2";
		el.ggDx=-405;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 210px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dig_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dig_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._navigation_bar.appendChild(me._dig_2);
		el=me._lab_2=document.createElement('div');
		els=me._lab_2__img=document.createElement('img');
		els.className='ggskin ggskin_lab_2';
		hs=basePath + 'images/lab_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="LAB_2";
		el.ggDx=-135;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 210px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lab_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lab_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._navigation_bar.appendChild(me._lab_2);
		el=me._institute_2=document.createElement('div');
		els=me._institute_2__img=document.createElement('img');
		els.className='ggskin ggskin_institute_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="INSTITUTE_2";
		el.ggDx=135;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 210px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._institute_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._institute_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._navigation_bar.appendChild(me._institute_2);
		el=me._mount_2=document.createElement('div');
		els=me._mount_2__img=document.createElement('img');
		els.className='ggskin ggskin_mount_2';
		hs=basePath + 'images/mount_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="MOUNT_2";
		el.ggDx=405;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 210px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mount_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mount_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._navigation_bar.appendChild(me._mount_2);
		me._active_skin.appendChild(me._navigation_bar);
		el=me._dig_title=document.createElement('div');
		el.ggId="DIG_Title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dig_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dig_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._dig_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._dig_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._dig_title.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._dig_title.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._dig_title.style.top='0%';
					me._dig_title.ggUpdatePosition(true);
				}
				else {
					me._dig_title.ggDx=0;
					me._dig_title.style.top='10%';
					me._dig_title.ggUpdatePosition(true);
				}
			}
		}
		me._dig_title.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width >= 1024)) && 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._dig_title.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._dig_title.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._dig_title.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._dig_title.ggCurrentLogicStateScaling == 0) {
					me._dig_title.ggParameter.sx = 0.3;
					me._dig_title.ggParameter.sy = 0.3;
					me._dig_title.style[domTransform]=parameterToTransform(me._dig_title.ggParameter);
				}
				else if (me._dig_title.ggCurrentLogicStateScaling == 1) {
					me._dig_title.ggParameter.sx = 0.8;
					me._dig_title.ggParameter.sy = 0.8;
					me._dig_title.style[domTransform]=parameterToTransform(me._dig_title.ggParameter);
				}
				else {
					me._dig_title.ggParameter.sx = 1;
					me._dig_title.ggParameter.sy = 1;
					me._dig_title.style[domTransform]=parameterToTransform(me._dig_title.ggParameter);
				}
			}
		}
		me._dig_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('the_dig') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._dig_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._dig_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._dig_title.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._dig_title.ggCurrentLogicStateAlpha == 0) {
					me._dig_title.style.visibility=me._dig_title.ggVisible?'inherit':'hidden';
					me._dig_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._dig_title.style.opacity == 0.0) { me._dig_title.style.visibility="hidden"; } }, 505);
					me._dig_title.style.opacity=0;
				}
			}
		}
		me._dig_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		el=me._title_dig=document.createElement('div');
		els=me._title_dig__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title_DIG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 70px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="THE DIG";
		el.appendChild(els);
		me._title_dig.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title_dig.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('spanish') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._title_dig.ggCurrentLogicStateText != newLogicStateText) {
				me._title_dig.ggCurrentLogicStateText = newLogicStateText;
				me._title_dig.style[domTransition]='';
				if (me._title_dig.ggCurrentLogicStateText == 0) {
					me._title_dig.ggText="Instrucciones";
					me._title_dig__text.innerHTML=me._title_dig.ggText;
					if (me._title_dig.ggUpdateText) {
					me._title_dig.ggUpdateText=function() {
						var hs="Instrucciones";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._title_dig.ggUpdatePosition) me._title_dig.ggUpdatePosition();
					}
				}
				else {
					me._title_dig.ggText="THE DIG";
					me._title_dig__text.innerHTML=me._title_dig.ggText;
					if (me._title_dig.ggUpdateText) {
					me._title_dig.ggUpdateText=function() {
						var hs="THE DIG";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._title_dig.ggUpdatePosition) me._title_dig.ggUpdatePosition();
					}
				}
			}
		}
		me._title_dig.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._dig_title.appendChild(me._title_dig);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._dig_title.appendChild(me._rectangle_3);
		me._active_skin.appendChild(me._dig_title);
		el=me._lab_title=document.createElement('div');
		el.ggId="LAB_Title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lab_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lab_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lab_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lab_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lab_title.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._lab_title.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._lab_title.style.top='0%';
					me._lab_title.ggUpdatePosition(true);
				}
				else {
					me._lab_title.ggDx=0;
					me._lab_title.style.top='10%';
					me._lab_title.ggUpdatePosition(true);
				}
			}
		}
		me._lab_title.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width >= 1024)) && 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._lab_title.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._lab_title.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._lab_title.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._lab_title.ggCurrentLogicStateScaling == 0) {
					me._lab_title.ggParameter.sx = 0.3;
					me._lab_title.ggParameter.sy = 0.3;
					me._lab_title.style[domTransform]=parameterToTransform(me._lab_title.ggParameter);
				}
				else if (me._lab_title.ggCurrentLogicStateScaling == 1) {
					me._lab_title.ggParameter.sx = 0.8;
					me._lab_title.ggParameter.sy = 0.8;
					me._lab_title.style[domTransform]=parameterToTransform(me._lab_title.ggParameter);
				}
				else {
					me._lab_title.ggParameter.sx = 1;
					me._lab_title.ggParameter.sy = 1;
					me._lab_title.style[domTransform]=parameterToTransform(me._lab_title.ggParameter);
				}
			}
		}
		me._lab_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('the_lab') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._lab_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._lab_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._lab_title.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._lab_title.ggCurrentLogicStateAlpha == 0) {
					me._lab_title.style.visibility=me._lab_title.ggVisible?'inherit':'hidden';
					me._lab_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._lab_title.style.opacity == 0.0) { me._lab_title.style.visibility="hidden"; } }, 505);
					me._lab_title.style.opacity=0;
				}
			}
		}
		me._lab_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		el=me._title_lab=document.createElement('div');
		els=me._title_lab__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title_LAB";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 70px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="THE LAB";
		el.appendChild(els);
		me._title_lab.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title_lab.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('spanish') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._title_lab.ggCurrentLogicStateText != newLogicStateText) {
				me._title_lab.ggCurrentLogicStateText = newLogicStateText;
				me._title_lab.style[domTransition]='';
				if (me._title_lab.ggCurrentLogicStateText == 0) {
					me._title_lab.ggText="Instrucciones";
					me._title_lab__text.innerHTML=me._title_lab.ggText;
					if (me._title_lab.ggUpdateText) {
					me._title_lab.ggUpdateText=function() {
						var hs="Instrucciones";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._title_lab.ggUpdatePosition) me._title_lab.ggUpdatePosition();
					}
				}
				else {
					me._title_lab.ggText="THE LAB";
					me._title_lab__text.innerHTML=me._title_lab.ggText;
					if (me._title_lab.ggUpdateText) {
					me._title_lab.ggUpdateText=function() {
						var hs="THE LAB";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._title_lab.ggUpdatePosition) me._title_lab.ggUpdatePosition();
					}
				}
			}
		}
		me._title_lab.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._lab_title.appendChild(me._title_lab);
		el=me._rectangle_41=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_41.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._lab_title.appendChild(me._rectangle_41);
		me._active_skin.appendChild(me._lab_title);
		el=me._institute_title=document.createElement('div');
		el.ggId="INSTITUTE_Title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 580px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._institute_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._institute_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._institute_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._institute_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._institute_title.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._institute_title.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._institute_title.style.top='0%';
					me._institute_title.ggUpdatePosition(true);
				}
				else {
					me._institute_title.ggDx=0;
					me._institute_title.style.top='10%';
					me._institute_title.ggUpdatePosition(true);
				}
			}
		}
		me._institute_title.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width >= 1024)) && 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._institute_title.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._institute_title.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._institute_title.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._institute_title.ggCurrentLogicStateScaling == 0) {
					me._institute_title.ggParameter.sx = 0.3;
					me._institute_title.ggParameter.sy = 0.3;
					me._institute_title.style[domTransform]=parameterToTransform(me._institute_title.ggParameter);
				}
				else if (me._institute_title.ggCurrentLogicStateScaling == 1) {
					me._institute_title.ggParameter.sx = 0.8;
					me._institute_title.ggParameter.sy = 0.8;
					me._institute_title.style[domTransform]=parameterToTransform(me._institute_title.ggParameter);
				}
				else {
					me._institute_title.ggParameter.sx = 1;
					me._institute_title.ggParameter.sy = 1;
					me._institute_title.style[domTransform]=parameterToTransform(me._institute_title.ggParameter);
				}
			}
		}
		me._institute_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('the_institute') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._institute_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._institute_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._institute_title.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._institute_title.ggCurrentLogicStateAlpha == 0) {
					me._institute_title.style.visibility=me._institute_title.ggVisible?'inherit':'hidden';
					me._institute_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._institute_title.style.opacity == 0.0) { me._institute_title.style.visibility="hidden"; } }, 505);
					me._institute_title.style.opacity=0;
				}
			}
		}
		me._institute_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		el=me._title_institute=document.createElement('div');
		els=me._title_institute__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title_INSTITUTE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 70px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="THE INSTITUTE";
		el.appendChild(els);
		me._title_institute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title_institute.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('spanish') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._title_institute.ggCurrentLogicStateText != newLogicStateText) {
				me._title_institute.ggCurrentLogicStateText = newLogicStateText;
				me._title_institute.style[domTransition]='';
				if (me._title_institute.ggCurrentLogicStateText == 0) {
					me._title_institute.ggText="Instrucciones";
					me._title_institute__text.innerHTML=me._title_institute.ggText;
					if (me._title_institute.ggUpdateText) {
					me._title_institute.ggUpdateText=function() {
						var hs="Instrucciones";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._title_institute.ggUpdatePosition) me._title_institute.ggUpdatePosition();
					}
				}
				else {
					me._title_institute.ggText="THE INSTITUTE";
					me._title_institute__text.innerHTML=me._title_institute.ggText;
					if (me._title_institute.ggUpdateText) {
					me._title_institute.ggUpdateText=function() {
						var hs="THE INSTITUTE";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._title_institute.ggUpdatePosition) me._title_institute.ggUpdatePosition();
					}
				}
			}
		}
		me._title_institute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._institute_title.appendChild(me._title_institute);
		el=me._rectangle_40=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_40.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._institute_title.appendChild(me._rectangle_40);
		me._active_skin.appendChild(me._institute_title);
		el=me._mount_title=document.createElement('div');
		el.ggId="MOUNT_Title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 450px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mount_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mount_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._mount_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._mount_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._mount_title.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._mount_title.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._mount_title.style.top='0%';
					me._mount_title.ggUpdatePosition(true);
				}
				else {
					me._mount_title.ggDx=0;
					me._mount_title.style.top='10%';
					me._mount_title.ggUpdatePosition(true);
				}
			}
		}
		me._mount_title.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width >= 1024)) && 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._mount_title.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._mount_title.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._mount_title.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._mount_title.ggCurrentLogicStateScaling == 0) {
					me._mount_title.ggParameter.sx = 0.3;
					me._mount_title.ggParameter.sy = 0.3;
					me._mount_title.style[domTransform]=parameterToTransform(me._mount_title.ggParameter);
				}
				else if (me._mount_title.ggCurrentLogicStateScaling == 1) {
					me._mount_title.ggParameter.sx = 0.8;
					me._mount_title.ggParameter.sy = 0.8;
					me._mount_title.style[domTransform]=parameterToTransform(me._mount_title.ggParameter);
				}
				else {
					me._mount_title.ggParameter.sx = 1;
					me._mount_title.ggParameter.sy = 1;
					me._mount_title.style[domTransform]=parameterToTransform(me._mount_title.ggParameter);
				}
			}
		}
		me._mount_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('the_mount') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._mount_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._mount_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._mount_title.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._mount_title.ggCurrentLogicStateAlpha == 0) {
					me._mount_title.style.visibility=me._mount_title.ggVisible?'inherit':'hidden';
					me._mount_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._mount_title.style.opacity == 0.0) { me._mount_title.style.visibility="hidden"; } }, 505);
					me._mount_title.style.opacity=0;
				}
			}
		}
		me._mount_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		el=me._title_mount=document.createElement('div');
		els=me._title_mount__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title_MOUNT";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 70px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="THE MOUNT";
		el.appendChild(els);
		me._title_mount.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title_mount.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('spanish') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._title_mount.ggCurrentLogicStateText != newLogicStateText) {
				me._title_mount.ggCurrentLogicStateText = newLogicStateText;
				me._title_mount.style[domTransition]='';
				if (me._title_mount.ggCurrentLogicStateText == 0) {
					me._title_mount.ggText="Instrucciones";
					me._title_mount__text.innerHTML=me._title_mount.ggText;
					if (me._title_mount.ggUpdateText) {
					me._title_mount.ggUpdateText=function() {
						var hs="Instrucciones";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._title_mount.ggUpdatePosition) me._title_mount.ggUpdatePosition();
					}
				}
				else {
					me._title_mount.ggText="THE MOUNT";
					me._title_mount__text.innerHTML=me._title_mount.ggText;
					if (me._title_mount.ggUpdateText) {
					me._title_mount.ggUpdateText=function() {
						var hs="THE MOUNT";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._title_mount.ggUpdatePosition) me._title_mount.ggUpdatePosition();
					}
				}
			}
		}
		me._title_mount.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._mount_title.appendChild(me._title_mount);
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._mount_title.appendChild(me._rectangle_4);
		me._active_skin.appendChild(me._mount_title);
		el=me._line_menu_dig=document.createElement('div');
		el.ggId="Line_menu_dig";
		el.ggDx=0;
		el.ggDy=15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(60vw*0.0232);';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 60vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._line_menu_dig.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line_menu_dig.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._line_menu_dig.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._line_menu_dig.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._line_menu_dig.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._line_menu_dig.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = 20;
					me._line_menu_dig.ggUpdatePosition(true);
				}
				else {
					me._line_menu_dig.ggDx=0;
					me._line_menu_dig.ggDy=15;
					me._line_menu_dig.ggUpdatePosition(true);
				}
			}
		}
		me._line_menu_dig.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._line_menu_dig.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._line_menu_dig.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._line_menu_dig.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._line_menu_dig.ggCurrentLogicStateScaling == 0) {
					me._line_menu_dig.ggParameter.sx = 0.4;
					me._line_menu_dig.ggParameter.sy = 0.4;
					me._line_menu_dig.style[domTransform]=parameterToTransform(me._line_menu_dig.ggParameter);
				}
				else {
					me._line_menu_dig.ggParameter.sx = 1;
					me._line_menu_dig.ggParameter.sy = 1;
					me._line_menu_dig.style[domTransform]=parameterToTransform(me._line_menu_dig.ggParameter);
				}
			}
		}
		me._line_menu_dig.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('the_dig') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._line_menu_dig.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._line_menu_dig.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._line_menu_dig.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._line_menu_dig.ggCurrentLogicStateAlpha == 0) {
					me._line_menu_dig.style.visibility=me._line_menu_dig.ggVisible?'inherit':'hidden';
					me._line_menu_dig.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._line_menu_dig.style.opacity == 0.0) { me._line_menu_dig.style.visibility="hidden"; } }, 505);
					me._line_menu_dig.style.opacity=0;
				}
			}
		}
		me._line_menu_dig.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._line_2=document.createElement('div');
		el.ggId="line_2";
		el.ggDx=212;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 3px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._line_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._line_menu_dig.appendChild(me._line_2);
		el=me._line_1=document.createElement('div');
		el.ggId="line_1";
		el.ggDx=-208;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 3px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._line_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._line_menu_dig.appendChild(me._line_1);
		el=me._dig_stop1=document.createElement('div');
		el.ggId="DIG_STOP1";
		el.ggDx=-419;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dig_stop1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dig_stop1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dig_stop1'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dig_stop1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dig_stop1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dig_stop1.style[domTransition]='background-color 0s, border-color 0s';
				if (me._dig_stop1.ggCurrentLogicStateBackgroundColor == 0) {
					me._dig_stop1.style.backgroundColor="rgba(82,131,14,1)";
				}
				else {
					me._dig_stop1.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._dig_stop1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['dig_stop1'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._dig_stop1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._dig_stop1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._dig_stop1.style[domTransition]='background-color 0s, border-color 0s';
				if (me._dig_stop1.ggCurrentLogicStateBorderColor == 0) {
					me._dig_stop1.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me._dig_stop1.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._dig_stop1.onclick=function (e) {
			player.setVariableValue('video_iframe', true);
			player.setVariableValue('vis_active_skin', false);
			if (me._video_vimeo.ggVideoNotLoaded) {
				me._video_vimeo.ggInitMedia(me._video_vimeo.ggVideoSource);
			}
			me._video_vimeo.style[domTransition]='none';
			me._video_vimeo.style.visibility=(Number(me._video_vimeo.style.opacity)>0||!me._video_vimeo.style.opacity)?'inherit':'hidden';
			me._video_vimeo.ggVisible=true;
			me._text_fg.style[domTransition]='none';
			me._text_fg.style.visibility=(Number(me._text_fg.style.opacity)>0||!me._text_fg.style.opacity)?'inherit':'hidden';
			me._text_fg.ggVisible=true;
			gtag('event', 'Finding Gnatalie', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'DIG_STOP1'
});
		}
		me._dig_stop1.onmouseover=function (e) {
			me.elementMouseOver['dig_stop1']=true;
			me._dig_stop1.logicBlock_backgroundcolor();
			me._dig_stop1.logicBlock_bordercolor();
		}
		me._dig_stop1.onmouseout=function (e) {
			me.elementMouseOver['dig_stop1']=false;
			me._dig_stop1.logicBlock_backgroundcolor();
			me._dig_stop1.logicBlock_bordercolor();
		}
		me._dig_stop1.ontouchend=function (e) {
			me.elementMouseOver['dig_stop1']=false;
			me._dig_stop1.logicBlock_backgroundcolor();
			me._dig_stop1.logicBlock_bordercolor();
		}
		me._dig_stop1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_finding_gnatalie=document.createElement('div');
		els=me._tt_finding_gnatalie__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_finding_gnatalie";
		el.ggDx=0;
		el.ggDy=-145;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 130%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 1015%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="FINDING GNATALIE";
		el.appendChild(els);
		me._tt_finding_gnatalie.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_finding_gnatalie.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._dig_stop1.appendChild(me._tt_finding_gnatalie);
		me._line_menu_dig.appendChild(me._dig_stop1);
		el=me._dig_stop2=document.createElement('div');
		el.ggId="DIG_STOP2";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dig_stop2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dig_stop2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dig_stop2'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dig_stop2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dig_stop2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dig_stop2.style[domTransition]='background-color 0s, border-color 0s';
				if (me._dig_stop2.ggCurrentLogicStateBackgroundColor == 0) {
					me._dig_stop2.style.backgroundColor="rgba(82,131,14,1)";
				}
				else {
					me._dig_stop2.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._dig_stop2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['dig_stop2'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._dig_stop2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._dig_stop2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._dig_stop2.style[domTransition]='background-color 0s, border-color 0s';
				if (me._dig_stop2.ggCurrentLogicStateBorderColor == 0) {
					me._dig_stop2.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me._dig_stop2.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._dig_stop2.onclick=function (e) {
			player.setVariableValue('image_iframe', true);
			player.setVariableValue('vis_active_skin', false);
			gtag('event', 'Quarry', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'DIG_STOP2'
});
		}
		me._dig_stop2.onmouseover=function (e) {
			me.elementMouseOver['dig_stop2']=true;
			me._dig_stop2.logicBlock_backgroundcolor();
			me._dig_stop2.logicBlock_bordercolor();
		}
		me._dig_stop2.onmouseout=function (e) {
			me.elementMouseOver['dig_stop2']=false;
			me._dig_stop2.logicBlock_backgroundcolor();
			me._dig_stop2.logicBlock_bordercolor();
		}
		me._dig_stop2.ontouchend=function (e) {
			me.elementMouseOver['dig_stop2']=false;
			me._dig_stop2.logicBlock_backgroundcolor();
			me._dig_stop2.logicBlock_bordercolor();
		}
		me._dig_stop2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_the_quarry=document.createElement('div');
		els=me._tt_the_quarry__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_the_quarry";
		el.ggDx=0;
		el.ggDy=-145;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 130%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 780%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="THE QUARRY";
		el.appendChild(els);
		me._tt_the_quarry.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_the_quarry.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._dig_stop2.appendChild(me._tt_the_quarry);
		me._line_menu_dig.appendChild(me._dig_stop2);
		el=me._dig_stop3=document.createElement('div');
		el.ggId="DIG_STOP3";
		el.ggDx=422;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dig_stop3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dig_stop3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dig_stop3'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dig_stop3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dig_stop3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dig_stop3.style[domTransition]='background-color 0s, border-color 0s';
				if (me._dig_stop3.ggCurrentLogicStateBackgroundColor == 0) {
					me._dig_stop3.style.backgroundColor="rgba(82,131,14,1)";
				}
				else {
					me._dig_stop3.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._dig_stop3.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['dig_stop3'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._dig_stop3.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._dig_stop3.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._dig_stop3.style[domTransition]='background-color 0s, border-color 0s';
				if (me._dig_stop3.ggCurrentLogicStateBorderColor == 0) {
					me._dig_stop3.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me._dig_stop3.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._dig_stop3.onclick=function (e) {
			player.setVariableValue('crew_iframe', true);
			player.setVariableValue('vis_active_skin', false);
			gtag('event', 'The crew', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'DIG_STOP3'
});
		}
		me._dig_stop3.onmouseover=function (e) {
			me.elementMouseOver['dig_stop3']=true;
			me._dig_stop3.logicBlock_backgroundcolor();
			me._dig_stop3.logicBlock_bordercolor();
		}
		me._dig_stop3.onmouseout=function (e) {
			me.elementMouseOver['dig_stop3']=false;
			me._dig_stop3.logicBlock_backgroundcolor();
			me._dig_stop3.logicBlock_bordercolor();
		}
		me._dig_stop3.ontouchend=function (e) {
			me.elementMouseOver['dig_stop3']=false;
			me._dig_stop3.logicBlock_backgroundcolor();
			me._dig_stop3.logicBlock_bordercolor();
		}
		me._dig_stop3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_the_crew=document.createElement('div');
		els=me._tt_the_crew__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_the_crew";
		el.ggDx=0;
		el.ggDy=-145;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 130%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 705%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="THE CREW";
		el.appendChild(els);
		me._tt_the_crew.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_the_crew.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._dig_stop3.appendChild(me._tt_the_crew);
		me._line_menu_dig.appendChild(me._dig_stop3);
		me._active_skin.appendChild(me._line_menu_dig);
		el=me._line_menu_lab=document.createElement('div');
		el.ggId="Line_menu_lab";
		el.ggDx=0;
		el.ggDy=15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(60vw*0.0454);';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 60vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._line_menu_lab.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line_menu_lab.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._line_menu_lab.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._line_menu_lab.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._line_menu_lab.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._line_menu_lab.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = 20;
					me._line_menu_lab.ggUpdatePosition(true);
				}
				else {
					me._line_menu_lab.ggDx=0;
					me._line_menu_lab.ggDy=15;
					me._line_menu_lab.ggUpdatePosition(true);
				}
			}
		}
		me._line_menu_lab.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._line_menu_lab.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._line_menu_lab.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._line_menu_lab.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._line_menu_lab.ggCurrentLogicStateScaling == 0) {
					me._line_menu_lab.ggParameter.sx = 0.4;
					me._line_menu_lab.ggParameter.sy = 0.4;
					me._line_menu_lab.style[domTransform]=parameterToTransform(me._line_menu_lab.ggParameter);
				}
				else {
					me._line_menu_lab.ggParameter.sx = 1;
					me._line_menu_lab.ggParameter.sy = 1;
					me._line_menu_lab.style[domTransform]=parameterToTransform(me._line_menu_lab.ggParameter);
				}
			}
		}
		me._line_menu_lab.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('the_lab') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._line_menu_lab.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._line_menu_lab.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._line_menu_lab.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._line_menu_lab.ggCurrentLogicStateAlpha == 0) {
					me._line_menu_lab.style.visibility=me._line_menu_lab.ggVisible?'inherit':'hidden';
					me._line_menu_lab.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._line_menu_lab.style.opacity == 0.0) { me._line_menu_lab.style.visibility="hidden"; } }, 505);
					me._line_menu_lab.style.opacity=0;
				}
			}
		}
		me._line_menu_lab.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._line_3=document.createElement('div');
		el.ggId="line_3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 3px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._line_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._line_menu_lab.appendChild(me._line_3);
		el=me._lab_stop1=document.createElement('div');
		el.ggId="LAB_STOP1";
		el.ggDx=-210;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lab_stop1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lab_stop1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['lab_stop1'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._lab_stop1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._lab_stop1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._lab_stop1.style[domTransition]='background-color 0s, border-color 0s';
				if (me._lab_stop1.ggCurrentLogicStateBackgroundColor == 0) {
					me._lab_stop1.style.backgroundColor="rgba(82,131,14,1)";
				}
				else {
					me._lab_stop1.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._lab_stop1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['lab_stop1'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._lab_stop1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._lab_stop1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._lab_stop1.style[domTransition]='background-color 0s, border-color 0s';
				if (me._lab_stop1.ggCurrentLogicStateBorderColor == 0) {
					me._lab_stop1.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me._lab_stop1.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._lab_stop1.onclick=function (e) {
			player.setVariableValue('vis_active_skin', false);
			player.setVariableValue('arrival_iframe', true);
			if (me._video_vimeo_arrival.ggVideoNotLoaded) {
				me._video_vimeo_arrival.ggInitMedia(me._video_vimeo_arrival.ggVideoSource);
			}
			me._video_vimeo_arrival.style[domTransition]='none';
			me._video_vimeo_arrival.style.visibility=(Number(me._video_vimeo_arrival.style.opacity)>0||!me._video_vimeo_arrival.style.opacity)?'inherit':'hidden';
			me._video_vimeo_arrival.ggVisible=true;
			gtag('event', 'Gnatalie arrival', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'LAB_STOP1'
});
		}
		me._lab_stop1.onmouseover=function (e) {
			me.elementMouseOver['lab_stop1']=true;
			me._lab_stop1.logicBlock_backgroundcolor();
			me._lab_stop1.logicBlock_bordercolor();
		}
		me._lab_stop1.onmouseout=function (e) {
			me.elementMouseOver['lab_stop1']=false;
			me._lab_stop1.logicBlock_backgroundcolor();
			me._lab_stop1.logicBlock_bordercolor();
		}
		me._lab_stop1.ontouchend=function (e) {
			me.elementMouseOver['lab_stop1']=false;
			me._lab_stop1.logicBlock_backgroundcolor();
			me._lab_stop1.logicBlock_bordercolor();
		}
		me._lab_stop1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_gnatalie_arrival=document.createElement('div');
		els=me._tt_gnatalie_arrival__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_Gnatalie_Arrival";
		el.ggDx=0;
		el.ggDy=-145;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 130%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 1015%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="GNATALIE\'S ARRIVAL";
		el.appendChild(els);
		me._tt_gnatalie_arrival.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_gnatalie_arrival.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._lab_stop1.appendChild(me._tt_gnatalie_arrival);
		me._line_menu_lab.appendChild(me._lab_stop1);
		el=me._lab_stop2=document.createElement('div');
		el.ggId="LAB_STOP2";
		el.ggDx=210;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lab_stop2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lab_stop2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['lab_stop2'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._lab_stop2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._lab_stop2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._lab_stop2.style[domTransition]='background-color 0s, border-color 0s';
				if (me._lab_stop2.ggCurrentLogicStateBackgroundColor == 0) {
					me._lab_stop2.style.backgroundColor="rgba(82,131,14,1)";
				}
				else {
					me._lab_stop2.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._lab_stop2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['lab_stop2'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._lab_stop2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._lab_stop2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._lab_stop2.style[domTransition]='background-color 0s, border-color 0s';
				if (me._lab_stop2.ggCurrentLogicStateBorderColor == 0) {
					me._lab_stop2.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me._lab_stop2.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._lab_stop2.onclick=function (e) {
			player.setVariableValue('vis_active_skin', false);
			player.setVariableValue('green_iframe', true);
			gtag('event', 'It is green', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'LAB_STOP2'
});
		}
		me._lab_stop2.onmouseover=function (e) {
			me.elementMouseOver['lab_stop2']=true;
			me._lab_stop2.logicBlock_backgroundcolor();
			me._lab_stop2.logicBlock_bordercolor();
		}
		me._lab_stop2.onmouseout=function (e) {
			me.elementMouseOver['lab_stop2']=false;
			me._lab_stop2.logicBlock_backgroundcolor();
			me._lab_stop2.logicBlock_bordercolor();
		}
		me._lab_stop2.ontouchend=function (e) {
			me.elementMouseOver['lab_stop2']=false;
			me._lab_stop2.logicBlock_backgroundcolor();
			me._lab_stop2.logicBlock_bordercolor();
		}
		me._lab_stop2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_he_is_green=document.createElement('div');
		els=me._tt_he_is_green__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_he_is_green";
		el.ggDx=0;
		el.ggDy=-145;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 130%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 780%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="IT\'S GREEN";
		el.appendChild(els);
		me._tt_he_is_green.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_he_is_green.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._lab_stop2.appendChild(me._tt_he_is_green);
		me._line_menu_lab.appendChild(me._lab_stop2);
		me._active_skin.appendChild(me._line_menu_lab);
		el=me._line_menu_institute=document.createElement('div');
		el.ggId="Line_menu_institute";
		el.ggDx=0;
		el.ggDy=15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(60vw*0.0454);';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 60vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._line_menu_institute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line_menu_institute.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._line_menu_institute.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._line_menu_institute.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._line_menu_institute.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._line_menu_institute.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = 20;
					me._line_menu_institute.ggUpdatePosition(true);
				}
				else {
					me._line_menu_institute.ggDx=0;
					me._line_menu_institute.ggDy=15;
					me._line_menu_institute.ggUpdatePosition(true);
				}
			}
		}
		me._line_menu_institute.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._line_menu_institute.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._line_menu_institute.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._line_menu_institute.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._line_menu_institute.ggCurrentLogicStateScaling == 0) {
					me._line_menu_institute.ggParameter.sx = 0.4;
					me._line_menu_institute.ggParameter.sy = 0.4;
					me._line_menu_institute.style[domTransform]=parameterToTransform(me._line_menu_institute.ggParameter);
				}
				else {
					me._line_menu_institute.ggParameter.sx = 1;
					me._line_menu_institute.ggParameter.sy = 1;
					me._line_menu_institute.style[domTransform]=parameterToTransform(me._line_menu_institute.ggParameter);
				}
			}
		}
		me._line_menu_institute.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('the_institute') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._line_menu_institute.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._line_menu_institute.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._line_menu_institute.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._line_menu_institute.ggCurrentLogicStateAlpha == 0) {
					me._line_menu_institute.style.visibility=me._line_menu_institute.ggVisible?'inherit':'hidden';
					me._line_menu_institute.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._line_menu_institute.style.opacity == 0.0) { me._line_menu_institute.style.visibility="hidden"; } }, 505);
					me._line_menu_institute.style.opacity=0;
				}
			}
		}
		me._line_menu_institute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._line=document.createElement('div');
		el.ggId="line";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 3px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._line.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._line_menu_institute.appendChild(me._line);
		el=me._institute_stop1=document.createElement('div');
		el.ggId="INSTITUTE_STOP1";
		el.ggDx=-210;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._institute_stop1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._institute_stop1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['institute_stop1'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._institute_stop1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._institute_stop1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._institute_stop1.style[domTransition]='background-color 0s, border-color 0s';
				if (me._institute_stop1.ggCurrentLogicStateBackgroundColor == 0) {
					me._institute_stop1.style.backgroundColor="rgba(82,131,14,1)";
				}
				else {
					me._institute_stop1.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._institute_stop1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['institute_stop1'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._institute_stop1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._institute_stop1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._institute_stop1.style[domTransition]='background-color 0s, border-color 0s';
				if (me._institute_stop1.ggCurrentLogicStateBorderColor == 0) {
					me._institute_stop1.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me._institute_stop1.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._institute_stop1.onclick=function (e) {
			player.setVariableValue('library_iframe', true);
			player.setVariableValue('vis_active_skin', false);
			if (me._video_youtube_library.ggVideoNotLoaded) {
				me._video_youtube_library.ggInitMedia(me._video_youtube_library.ggVideoSource);
			}
			me._video_youtube_library.style[domTransition]='none';
			me._video_youtube_library.style.visibility=(Number(me._video_youtube_library.style.opacity)>0||!me._video_youtube_library.style.opacity)?'inherit':'hidden';
			me._video_youtube_library.ggVisible=true;
			gtag('event', 'The Collection', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'INSTITUTE_STOP1'
});
		}
		me._institute_stop1.onmouseover=function (e) {
			me.elementMouseOver['institute_stop1']=true;
			me._institute_stop1.logicBlock_backgroundcolor();
			me._institute_stop1.logicBlock_bordercolor();
		}
		me._institute_stop1.onmouseout=function (e) {
			me.elementMouseOver['institute_stop1']=false;
			me._institute_stop1.logicBlock_backgroundcolor();
			me._institute_stop1.logicBlock_bordercolor();
		}
		me._institute_stop1.ontouchend=function (e) {
			me.elementMouseOver['institute_stop1']=false;
			me._institute_stop1.logicBlock_backgroundcolor();
			me._institute_stop1.logicBlock_bordercolor();
		}
		me._institute_stop1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_collection=document.createElement('div');
		els=me._tt_collection__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_collection";
		el.ggDx=0;
		el.ggDy=-145;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 130%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 1015%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="THE COLLECTION";
		el.appendChild(els);
		me._tt_collection.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_collection.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._institute_stop1.appendChild(me._tt_collection);
		me._line_menu_institute.appendChild(me._institute_stop1);
		el=me._institute_stop2=document.createElement('div');
		el.ggId="INSTITUTE_STOP2";
		el.ggDx=210;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._institute_stop2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._institute_stop2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['institute_stop2'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._institute_stop2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._institute_stop2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._institute_stop2.style[domTransition]='background-color 0s, border-color 0s';
				if (me._institute_stop2.ggCurrentLogicStateBackgroundColor == 0) {
					me._institute_stop2.style.backgroundColor="rgba(82,131,14,1)";
				}
				else {
					me._institute_stop2.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._institute_stop2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['institute_stop2'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._institute_stop2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._institute_stop2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._institute_stop2.style[domTransition]='background-color 0s, border-color 0s';
				if (me._institute_stop2.ggCurrentLogicStateBorderColor == 0) {
					me._institute_stop2.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me._institute_stop2.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._institute_stop2.onclick=function (e) {
			player.setVariableValue('vis_active_skin', false);
			player.setVariableValue('skeleton_iframe', true);
			gtag('event', 'Skeletons in cabinets', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'INSTITUTE_STOP2'
});
		}
		me._institute_stop2.onmouseover=function (e) {
			me.elementMouseOver['institute_stop2']=true;
			me._institute_stop2.logicBlock_backgroundcolor();
			me._institute_stop2.logicBlock_bordercolor();
		}
		me._institute_stop2.onmouseout=function (e) {
			me.elementMouseOver['institute_stop2']=false;
			me._institute_stop2.logicBlock_backgroundcolor();
			me._institute_stop2.logicBlock_bordercolor();
		}
		me._institute_stop2.ontouchend=function (e) {
			me.elementMouseOver['institute_stop2']=false;
			me._institute_stop2.logicBlock_backgroundcolor();
			me._institute_stop2.logicBlock_bordercolor();
		}
		me._institute_stop2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_skeletons=document.createElement('div');
		els=me._tt_skeletons__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_skeletons";
		el.ggDx=0;
		el.ggDy=-145;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 130%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 1410%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="SKELETONS IN THE CABINETS";
		el.appendChild(els);
		me._tt_skeletons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_skeletons.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._institute_stop2.appendChild(me._tt_skeletons);
		me._line_menu_institute.appendChild(me._institute_stop2);
		me._active_skin.appendChild(me._line_menu_institute);
		el=me._return_button=document.createElement('div');
		els=me._return_button__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Return Button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : 30px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 29px;';
		hs+='visibility : hidden;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 28px;';
		hs+='background: #52830e;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="< Return";
		el.appendChild(els);
		me._return_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._return_button.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['return_button'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._return_button.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._return_button.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._return_button__text.style[domTransition]='background-color 0s, color 0s';
				if (me._return_button.ggCurrentLogicStateBackgroundColor == 0) {
					me._return_button__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._return_button__text.style.backgroundColor="rgba(82,131,14,1)";
				}
			}
		}
		me._return_button.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['return_button'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._return_button.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._return_button.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._return_button__text.style[domTransition]='background-color 0s, color 0s';
				if (me._return_button.ggCurrentLogicStateTextColor == 0) {
					me._return_button__text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._return_button__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._return_button.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._cover_menu.style[domTransition]='none';
			} else {
				me._cover_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._cover_menu.style.opacity='1';
			me._cover_menu.style.visibility=me._cover_menu.ggVisible?'inherit':'hidden';
			me._cover_menu.style[domTransition]='none';
			me._cover_menu.style.visibility='hidden';
			me._cover_menu.ggVisible=false;
			if (player.transitionsDisabled) {
				me._return_button.style[domTransition]='none';
			} else {
				me._return_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._return_button.style.opacity='0';
			me._return_button.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._mount_title.style[domTransition]='none';
			} else {
				me._mount_title.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._mount_title.style.opacity='1';
			me._mount_title.style.visibility=me._mount_title.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._navigation_bar.style[domTransition]='none';
			} else {
				me._navigation_bar.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._navigation_bar.style.opacity='1';
			me._navigation_bar.style.visibility=me._navigation_bar.ggVisible?'inherit':'hidden';
			player.openNext("{node10}","$(cur)");
			player.setPanTiltFov(-32.9,0.35,52);
			player.setVariableValue('activated_menu', false);
			player.setVariableValue('the_mount', false);
			player.setVariableValue('the_dig', false);
			player.setVariableValue('the_lab', false);
			player.setVariableValue('the_institute', false);
			me._background.style[domTransition]='none';
			me._background.style.visibility=(Number(me._background.style.opacity)>0||!me._background.style.opacity)?'inherit':'hidden';
			me._background.ggVisible=true;
			me._mount_2.style[domTransition]='none';
			me._mount_2.style.visibility='hidden';
			me._mount_2.ggVisible=false;
			me._institute_2.style[domTransition]='none';
			me._institute_2.style.visibility='hidden';
			me._institute_2.ggVisible=false;
			me._lab_2.style[domTransition]='none';
			me._lab_2.style.visibility='hidden';
			me._lab_2.ggVisible=false;
			me._dig_2.style[domTransition]='none';
			me._dig_2.style.visibility='hidden';
			me._dig_2.ggVisible=false;
		}
		me._return_button.onmouseover=function (e) {
			me.elementMouseOver['return_button']=true;
			me._return_button.logicBlock_backgroundcolor();
			me._return_button.logicBlock_textcolor();
		}
		me._return_button.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._return_button__text)
					return;
				}
			}
			me.elementMouseOver['return_button']=false;
			me._return_button.logicBlock_backgroundcolor();
			me._return_button.logicBlock_textcolor();
		}
		me._return_button.ontouchend=function (e) {
			me.elementMouseOver['return_button']=false;
			me._return_button.logicBlock_backgroundcolor();
			me._return_button.logicBlock_textcolor();
		}
		me._return_button.ggUpdatePosition=function (useTransition) {
		}
		me._active_skin.appendChild(me._return_button);
		el=me._cover_menu=document.createElement('div');
		el.ggId="cover_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 67.7344%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cover_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cover_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._active_skin.appendChild(me._cover_menu);
		me.divSkin.appendChild(me._active_skin);
		el=me._iframe_fg=document.createElement('div');
		el.ggId="iframe_FG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._iframe_fg.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._iframe_fg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width >= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._iframe_fg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._iframe_fg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._iframe_fg.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_fg.ggCurrentLogicStateScaling == 0) {
					me._iframe_fg.ggParameter.sx = 0.8;
					me._iframe_fg.ggParameter.sy = 0.8;
					me._iframe_fg.style[domTransform]=parameterToTransform(me._iframe_fg.ggParameter);
				}
				else if (me._iframe_fg.ggCurrentLogicStateScaling == 1) {
					me._iframe_fg.ggParameter.sx = 1.4;
					me._iframe_fg.ggParameter.sy = 1.4;
					me._iframe_fg.style[domTransform]=parameterToTransform(me._iframe_fg.ggParameter);
				}
				else {
					me._iframe_fg.ggParameter.sx = 1;
					me._iframe_fg.ggParameter.sy = 1;
					me._iframe_fg.style[domTransform]=parameterToTransform(me._iframe_fg.ggParameter);
				}
			}
		}
		me._iframe_fg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('video_iframe') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._iframe_fg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._iframe_fg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._iframe_fg.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_fg.ggCurrentLogicStateVisible == 0) {
					me._iframe_fg.style.visibility=(Number(me._iframe_fg.style.opacity)>0||!me._iframe_fg.style.opacity)?'inherit':'hidden';
					me._iframe_fg.ggVisible=true;
				}
				else {
					me._iframe_fg.style.visibility="hidden";
					me._iframe_fg.ggVisible=false;
				}
			}
		}
		me._iframe_fg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_frame_video0=document.createElement('div');
		el.ggId="Container frame_video";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(60vw*0.7187);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_frame_video0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_frame_video0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._left_15=document.createElement('div');
		el.ggId="left_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_video0.appendChild(me._left_15);
		el=me._right_15=document.createElement('div');
		el.ggId="right_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._right_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_video0.appendChild(me._right_15);
		el=me._bottom_15=document.createElement('div');
		el.ggId="bottom_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bottom_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bottom_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_frame_video0.appendChild(me._bottom_15);
		el=me._top_15=document.createElement('div');
		el.ggId="top_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._top_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._top_15.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_video0.appendChild(me._top_15);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojNTI4MzBFO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6.52174%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 4.6875%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.onclick=function (e) {
			me._video_vimeo.ggInitMedia('');
			me._video_vimeo.style[domTransition]='none';
			me._video_vimeo.style.visibility='hidden';
			me._video_vimeo.ggVisible=false;
			me._text_fg.style[domTransition]='none';
			me._text_fg.style.visibility='hidden';
			me._text_fg.ggVisible=false;
			player.setVariableValue('video_iframe', false);
			player.setVariableValue('vis_active_skin', true);
			me._video_vimeo.ggInitMedia("");
		}
		me._svg_2.onmouseover=function (e) {
			me._svg_2__img.style.visibility='hidden';
			me._svg_2__imgo.style.visibility='inherit';
		}
		me._svg_2.onmouseout=function (e) {
			me._svg_2__img.style.visibility='inherit';
			me._svg_2__imgo.style.visibility='hidden';
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_video0.appendChild(me._svg_2);
		el=me._rectangle_6=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_fg=document.createElement('div');
		els=me._text_fg__img=document.createElement('img');
		els.className='ggskin ggskin_text_fg';
		hs=basePath + 'images/text_fg.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="text_FG";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 2%;';
		hs+='height : 16.7472%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._text_fg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_fg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_6.appendChild(me._text_fg);
		el=me._video_vimeo=document.createElement('div');
		me._video_vimeo.seekbars = [];
		me._video_vimeo.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_vimeo.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_vimeo.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_vimeo.hasChildNodes()) {
				me._video_vimeo.removeChild(me._video_vimeo.lastChild);
			}
			if (me._video_vimeo__vid) {
				me._video_vimeo__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._video_vimeo.ggVideoNotLoaded ==false && me._video_vimeo.ggDeactivate) { me._video_vimeo.ggDeactivate(); }
				me._video_vimeo.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_vimeo');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_vimeo.ggVideoNotLoaded = false;
			me._video_vimeo__vid=document.createElement('video');
			me._video_vimeo__vid.className='ggskin ggskin_video';
			me._video_vimeo__vid.setAttribute('width', '100%');
			me._video_vimeo__vid.setAttribute('height', '100%');
			me._video_vimeo__vid.setAttribute('controlsList', 'nodownload');
			me._video_vimeo__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_vimeo__vid.setAttribute('autoplay', '');
			me._video_vimeo__vid.setAttribute('controls', '');
			me._video_vimeo__source=document.createElement('source');
			me._video_vimeo__source.setAttribute('src', media);
			me._video_vimeo__vid.setAttribute('playsinline', 'playsinline');
			me._video_vimeo__vid.setAttribute('style', ';');
			me._video_vimeo__vid.style.outline = 'none';
			me._video_vimeo__vid.appendChild(me._video_vimeo__source);
			me._video_vimeo.appendChild(me._video_vimeo__vid);
			var videoEl = player.registerVideoElement('Video_vimeo', me._video_vimeo__vid);
			videoEl.autoplay = true;
			notifySeekbars();
			me._video_vimeo.ggVideoSource = media;
		}
		el.ggId="Video_vimeo";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 77.78%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_vimeo.ggIsActive=function() {
			if (me._video_vimeo__vid != null) {
				return (me._video_vimeo__vid.paused == false && me._video_vimeo__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_vimeo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_6.appendChild(me._video_vimeo);
		me._container_frame_video0.appendChild(me._rectangle_6);
		me._iframe_fg.appendChild(me._container_frame_video0);
		me.divSkin.appendChild(me._iframe_fg);
		el=me._iframe_quarry=document.createElement('div');
		el.ggId="iframe_QUARRY";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._iframe_quarry.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._iframe_quarry.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width >= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._iframe_quarry.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._iframe_quarry.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._iframe_quarry.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_quarry.ggCurrentLogicStateScaling == 0) {
					me._iframe_quarry.ggParameter.sx = 0.75;
					me._iframe_quarry.ggParameter.sy = 0.75;
					me._iframe_quarry.style[domTransform]=parameterToTransform(me._iframe_quarry.ggParameter);
				}
				else if (me._iframe_quarry.ggCurrentLogicStateScaling == 1) {
					me._iframe_quarry.ggParameter.sx = 1.2;
					me._iframe_quarry.ggParameter.sy = 1.2;
					me._iframe_quarry.style[domTransform]=parameterToTransform(me._iframe_quarry.ggParameter);
				}
				else {
					me._iframe_quarry.ggParameter.sx = 1;
					me._iframe_quarry.ggParameter.sy = 1;
					me._iframe_quarry.style[domTransform]=parameterToTransform(me._iframe_quarry.ggParameter);
				}
			}
		}
		me._iframe_quarry.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('image_iframe') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._iframe_quarry.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._iframe_quarry.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._iframe_quarry.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_quarry.ggCurrentLogicStateVisible == 0) {
					me._iframe_quarry.style.visibility=(Number(me._iframe_quarry.style.opacity)>0||!me._iframe_quarry.style.opacity)?'inherit':'hidden';
					me._iframe_quarry.ggVisible=true;
				}
				else {
					me._iframe_quarry.style.visibility="hidden";
					me._iframe_quarry.ggVisible=false;
				}
			}
		}
		me._iframe_quarry.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_frame_image=document.createElement('div');
		el.ggId="Container frame_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(55vw*0.8333);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 55vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_frame_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_frame_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._left_2=document.createElement('div');
		el.ggId="left_2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_image.appendChild(me._left_2);
		el=me._right_2=document.createElement('div');
		el.ggId="right_2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._right_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_image.appendChild(me._right_2);
		el=me._bottom_2=document.createElement('div');
		el.ggId="bottom_2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bottom_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bottom_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_frame_image.appendChild(me._bottom_2);
		el=me._top_2=document.createElement('div');
		el.ggId="top_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._top_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._top_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_image.appendChild(me._top_2);
		el=me._svg_2_1=document.createElement('div');
		els=me._svg_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojNTI4MzBFO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6.52174%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 4.6875%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_1.onclick=function (e) {
			player.setVariableValue('image_iframe', false);
			player.setVariableValue('vis_active_skin', true);
				player.stopSound("The Sounds of a Dinosaur Dig");
		}
		me._svg_2_1.onmouseover=function (e) {
			me._svg_2_1__img.style.visibility='hidden';
			me._svg_2_1__imgo.style.visibility='inherit';
		}
		me._svg_2_1.onmouseout=function (e) {
			me._svg_2_1__img.style.visibility='inherit';
			me._svg_2_1__imgo.style.visibility='hidden';
		}
		me._svg_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_image.appendChild(me._svg_2_1);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.ggText=basePath + "gallery/the_quarry.jpg";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="External 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79.8611%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = parentHeight;
			img.style.width=parentWidth + 'px';
			img.style.height=parentHeight + 'px';
			img.style.left='0px';
			img.style.top='0px';
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiAgPHBvbHlnb24gcG9pbnRzPSIxNS4yLDE2LjcgMTUuMiwxNi43IDI0LjIsMTEuNSAyNC4yLDIyLjUgMjQuMiwzMy41IDE1LjIsMjguMyAxNS4yLDI4LjMgOS43LDI4LjMgOS43LDI0LjggOS43LDIwLjIgOS43LDE2LjcgJiN4OTsiLz4KICA8cGF0aCBkPSJNMzAuMywyMi41YzAsMi4yLTAuOSw0LjItMi4yLDUuN2wxLDFj'+
			'MS42LTEuOCwyLjctNC4xLDIuNy02LjdjMC0yLjYtMS00LjktMi43LTYuN2wtMSwxQzI5LjQsMTguMywzMC4zLDIwLjMsMzAuMywyMi41eiIvPgogIDxwYXRoIGQ9Ik0yNy43LDIyLjVjMCwxLjYtMC42LDMuMS0xLjcsNC4ybDAuOCwwLjdjMS4yLTEuMywyLTMsMi00LjljMC0xLjktMC43LTMuNy0yLTQuOUwyNiwxOC4zQzI3LjEsMTkuNCwyNy43LDIwLjksMjcuNywyMi41eiIvPgogIDxwYXRoIGQ9Ik0zMy4yLDIyLjVjMCwzLTEuMSw1LjctMyw3LjdsMS40LDEuNGMyLjItMi40LDMuNi01LjYsMy42LTkuMWMwLTMuNS0xLjQtNi43LTMuNi05LjFsLTEuNCwxLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0'+
			'MzMi4xLDE2LjgsMzMuMiwxOS41LDMzLjIsMjIuNXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzUyODMwRTt9JiN4ZDsKCS5zdDF7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiA8Zz4KICA8cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iNDUiIGhlaWdodD0iNDUiLz4KICA8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1LjIsMTYuNyAxNS4yLDE2LjcgMjQuMiwxMS41IDI0LjIsMjIuNSAyNC4yLDMzLjUgMTUuMiwyOC4zIDE1LjIsMjguMyA5LjcsMjguMyA5LjcsMjQuOCA5LjcsMjAuMiAmI3hkOyYjeGE7JiN4OTsmI3g5OzkuNywxNi43'+
			'ICYjeDk7Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTMwLjMsMjIuNWMwLDIuMi0wLjksNC4yLTIuMiw1LjdsMSwxYzEuNi0xLjgsMi43LTQuMSwyLjctNi43cy0xLTQuOS0yLjctNi43bC0xLDEmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS40LDE4LjMsMzAuMywyMC4zLDMwLjMsMjIuNXoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjcuNywyMi41YzAsMS42LTAuNiwzLjEtMS43LDQuMmwwLjgsMC43YzEuMi0xLjMsMi0zLDItNC45cy0wLjctMy43LTItNC45TDI2LDE4LjMmI3hkOyYjeGE7JiN4OTsmI3g5O0MyNy4xLDE5LjQsMjcuNywyMC45LDI3LjcsMjIuNXoiLz4KICA8cGF0aCBjbG'+
			'Fzcz0ic3QxIiBkPSJNMzMuMiwyMi41YzAsMy0xLjEsNS43LTMsNy43bDEuNCwxLjRjMi4yLTIuNCwzLjYtNS42LDMuNi05LjFzLTEuNC02LjctMy42LTkuMWwtMS40LDEuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzMyLjEsMTYuOCwzMy4yLDE5LjUsMzMuMiwyMi41eiIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_3__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0%;';
		hs+='cursor : pointer;';
		hs+='height : 7.82608%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 5.20833%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.onclick=function (e) {
				player.playStopSound("The Sounds of a Dinosaur Dig","1");
			gtag('event', 'Sound of the quarry', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'quarry_sound_play'
});
		}
		me._svg_3.onmouseover=function (e) {
			me._svg_3__img.style.visibility='hidden';
			me._svg_3__imgo.style.visibility='inherit';
		}
		me._svg_3.onmouseout=function (e) {
			me._svg_3__img.style.visibility='inherit';
			me._svg_3__imgo.style.visibility='hidden';
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._external_1.appendChild(me._svg_3);
		me._rectangle_2.appendChild(me._external_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 2.22%;';
		hs+='height : 15.6944%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_2.appendChild(me._image_2);
		me._container_frame_image.appendChild(me._rectangle_2);
		me._iframe_quarry.appendChild(me._container_frame_image);
		me.divSkin.appendChild(me._iframe_quarry);
		el=me._iframe_crew=document.createElement('div');
		el.ggId="iframe_CREW";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._iframe_crew.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._iframe_crew.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width >= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._iframe_crew.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._iframe_crew.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._iframe_crew.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_crew.ggCurrentLogicStateScaling == 0) {
					me._iframe_crew.ggParameter.sx = 0.8;
					me._iframe_crew.ggParameter.sy = 0.8;
					me._iframe_crew.style[domTransform]=parameterToTransform(me._iframe_crew.ggParameter);
				}
				else if (me._iframe_crew.ggCurrentLogicStateScaling == 1) {
					me._iframe_crew.ggParameter.sx = 1.3;
					me._iframe_crew.ggParameter.sy = 1.3;
					me._iframe_crew.style[domTransform]=parameterToTransform(me._iframe_crew.ggParameter);
				}
				else {
					me._iframe_crew.ggParameter.sx = 1;
					me._iframe_crew.ggParameter.sy = 1;
					me._iframe_crew.style[domTransform]=parameterToTransform(me._iframe_crew.ggParameter);
				}
			}
		}
		me._iframe_crew.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('crew_iframe') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._iframe_crew.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._iframe_crew.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._iframe_crew.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_crew.ggCurrentLogicStateVisible == 0) {
					me._iframe_crew.style.visibility=(Number(me._iframe_crew.style.opacity)>0||!me._iframe_crew.style.opacity)?'inherit':'hidden';
					me._iframe_crew.ggVisible=true;
				}
				else {
					me._iframe_crew.style.visibility="hidden";
					me._iframe_crew.ggVisible=false;
				}
			}
		}
		me._iframe_crew.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_frame_video_2=document.createElement('div');
		el.ggId="Container frame_video_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(55vw*0.7708);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 55vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_frame_video_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_frame_video_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._left_14=document.createElement('div');
		el.ggId="left_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_video_2.appendChild(me._left_14);
		el=me._right_14=document.createElement('div');
		el.ggId="right_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._right_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_video_2.appendChild(me._right_14);
		el=me._bottom_14=document.createElement('div');
		el.ggId="bottom_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bottom_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bottom_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_frame_video_2.appendChild(me._bottom_14);
		el=me._top_14=document.createElement('div');
		el.ggId="top_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._top_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._top_14.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_video_2.appendChild(me._top_14);
		el=me._svg_2_2=document.createElement('div');
		els=me._svg_2_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojNTI4MzBFO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6.08108%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 4.6875%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_2.onclick=function (e) {
			me._video_vimeo_luis.ggInitMedia('');
			me._video_vimeo_luis.style[domTransition]='none';
			me._video_vimeo_luis.style.visibility='hidden';
			me._video_vimeo_luis.ggVisible=false;
			me._video_vimeo_erika.ggInitMedia('');
			me._video_vimeo_erika.style[domTransition]='none';
			me._video_vimeo_erika.style.visibility='hidden';
			me._video_vimeo_erika.ggVisible=false;
			me._video_vimeo_tony.ggInitMedia('');
			me._video_vimeo_tony.style[domTransition]='none';
			me._video_vimeo_tony.style.visibility='hidden';
			me._video_vimeo_tony.ggVisible=false;
			me._gallery_background.style[domTransition]='none';
			me._gallery_background.style.visibility=(Number(me._gallery_background.style.opacity)>0||!me._gallery_background.style.opacity)?'inherit':'hidden';
			me._gallery_background.ggVisible=true;
			me._dig_stop3c_1.style[domTransition]='none';
			me._dig_stop3c_1.style.visibility='hidden';
			me._dig_stop3c_1.ggVisible=false;
			me._dig_stop3d_1.style[domTransition]='none';
			me._dig_stop3d_1.style.visibility='hidden';
			me._dig_stop3d_1.ggVisible=false;
			me._dig_stop3b_1.style[domTransition]='none';
			me._dig_stop3b_1.style.visibility='hidden';
			me._dig_stop3b_1.ggVisible=false;
			me._dig_stop3_tab_1.style[domTransition]='none';
			me._dig_stop3_tab_1.style.visibility=(Number(me._dig_stop3_tab_1.style.opacity)>0||!me._dig_stop3_tab_1.style.opacity)?'inherit':'hidden';
			me._dig_stop3_tab_1.ggVisible=true;
			player.setVariableValue('crew_iframe', false);
			player.setVariableValue('vis_active_skin', true);
			me._video_vimeo_tony.ggInitMedia("");
			me._video_vimeo_erika.ggInitMedia("");
			me._video_vimeo_luis.ggInitMedia("");
		}
		me._svg_2_2.onmouseover=function (e) {
			me._svg_2_2__img.style.visibility='hidden';
			me._svg_2_2__imgo.style.visibility='inherit';
		}
		me._svg_2_2.onmouseout=function (e) {
			me._svg_2_2__img.style.visibility='inherit';
			me._svg_2_2__imgo.style.visibility='hidden';
		}
		me._svg_2_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_video_2.appendChild(me._svg_2_2);
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 83.6487%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._video_vimeo_luis=document.createElement('div');
		me._video_vimeo_luis.seekbars = [];
		me._video_vimeo_luis.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_vimeo_luis.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_vimeo_luis.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_vimeo_luis.hasChildNodes()) {
				me._video_vimeo_luis.removeChild(me._video_vimeo_luis.lastChild);
			}
			if(media == '') {
				notifySeekbars();
			if (me._video_vimeo_luis.ggVideoNotLoaded ==false && me._video_vimeo_luis.ggDeactivate) { me._video_vimeo_luis.ggDeactivate(); }
				me._video_vimeo_luis.ggVideoNotLoaded = true;
				return;
			}
			me._video_vimeo_luis.ggVideoNotLoaded = false;
			me._video_vimeo_luis__vid=document.createElement('iframe');
			me._video_vimeo_luis__vid.className='ggskin ggskin_video';
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + media + ggVideoParams;
			me._video_vimeo_luis__vid.setAttribute('src', ggVideoUrl);
			me._video_vimeo_luis__vid.setAttribute('width', '100%');
			me._video_vimeo_luis__vid.setAttribute('height', '100%');
			me._video_vimeo_luis__vid.setAttribute('allow', 'autoplay');
			me._video_vimeo_luis__vid.setAttribute('allowfullscreen', 'true');
			me._video_vimeo_luis__vid.setAttribute('style', 'border:none; ; ;');
			me._video_vimeo_luis.appendChild(me._video_vimeo_luis__vid);
			me._video_vimeo_luis.ggVideoSource = media;
		}
		el.ggId="Video_vimeo_luis";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 78.0291%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_vimeo_luis.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_vimeo_luis.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_5.appendChild(me._video_vimeo_luis);
		el=me._video_vimeo_erika=document.createElement('div');
		me._video_vimeo_erika.seekbars = [];
		me._video_vimeo_erika.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_vimeo_erika.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_vimeo_erika.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_vimeo_erika.hasChildNodes()) {
				me._video_vimeo_erika.removeChild(me._video_vimeo_erika.lastChild);
			}
			if(media == '') {
				notifySeekbars();
			if (me._video_vimeo_erika.ggVideoNotLoaded ==false && me._video_vimeo_erika.ggDeactivate) { me._video_vimeo_erika.ggDeactivate(); }
				me._video_vimeo_erika.ggVideoNotLoaded = true;
				return;
			}
			me._video_vimeo_erika.ggVideoNotLoaded = false;
			me._video_vimeo_erika__vid=document.createElement('iframe');
			me._video_vimeo_erika__vid.className='ggskin ggskin_video';
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + media + ggVideoParams;
			me._video_vimeo_erika__vid.setAttribute('src', ggVideoUrl);
			me._video_vimeo_erika__vid.setAttribute('width', '100%');
			me._video_vimeo_erika__vid.setAttribute('height', '100%');
			me._video_vimeo_erika__vid.setAttribute('allow', 'autoplay');
			me._video_vimeo_erika__vid.setAttribute('allowfullscreen', 'true');
			me._video_vimeo_erika__vid.setAttribute('style', 'border:none; ; ;');
			me._video_vimeo_erika.appendChild(me._video_vimeo_erika__vid);
			me._video_vimeo_erika.ggVideoSource = media;
		}
		el.ggId="Video_vimeo_erika";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 78.0291%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_vimeo_erika.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_vimeo_erika.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_5.appendChild(me._video_vimeo_erika);
		el=me._video_vimeo_tony=document.createElement('div');
		me._video_vimeo_tony.seekbars = [];
		me._video_vimeo_tony.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_vimeo_tony.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_vimeo_tony.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_vimeo_tony.hasChildNodes()) {
				me._video_vimeo_tony.removeChild(me._video_vimeo_tony.lastChild);
			}
			if(media == '') {
				notifySeekbars();
			if (me._video_vimeo_tony.ggVideoNotLoaded ==false && me._video_vimeo_tony.ggDeactivate) { me._video_vimeo_tony.ggDeactivate(); }
				me._video_vimeo_tony.ggVideoNotLoaded = true;
				return;
			}
			me._video_vimeo_tony.ggVideoNotLoaded = false;
			me._video_vimeo_tony__vid=document.createElement('iframe');
			me._video_vimeo_tony__vid.className='ggskin ggskin_video';
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + media + ggVideoParams;
			me._video_vimeo_tony__vid.setAttribute('src', ggVideoUrl);
			me._video_vimeo_tony__vid.setAttribute('width', '100%');
			me._video_vimeo_tony__vid.setAttribute('height', '100%');
			me._video_vimeo_tony__vid.setAttribute('allow', 'autoplay');
			me._video_vimeo_tony__vid.setAttribute('allowfullscreen', 'true');
			me._video_vimeo_tony__vid.setAttribute('style', 'border:none; ; ;');
			me._video_vimeo_tony.appendChild(me._video_vimeo_tony__vid);
			me._video_vimeo_tony.ggVideoSource = media;
		}
		el.ggId="Video_vimeo_tony";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 78.0291%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_vimeo_tony.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_vimeo_tony.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_5.appendChild(me._video_vimeo_tony);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0%;';
		hs+='height : 16.9628%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_5.appendChild(me._image_3);
		el=me._gallery_background=document.createElement('div');
		el.ggId="GALLERY_background";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 78.0291%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_background.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		el=me._external_3=document.createElement('div');
		els=me._external_3__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._external_3.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="External 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 81.5734%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 81.0185%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._external_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._external_3.logicBlock_externalurl = function() {
			var newLogicStateExternalUrl;
			if (
				((player.getVariableValue('gallery_1') == 1))
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				((player.getVariableValue('gallery_1') == 2))
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				((player.getVariableValue('gallery_1') == 3))
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				((player.getVariableValue('gallery_1') == 4))
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				((player.getVariableValue('gallery_1') == 5))
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				((player.getVariableValue('gallery_1') == 6))
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				((player.getVariableValue('gallery_1') == 7))
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else if (
				((player.getVariableValue('gallery_1') == 8))
			)
			{
				newLogicStateExternalUrl = 7;
			}
			else if (
				((player.getVariableValue('gallery_1') == 9))
			)
			{
				newLogicStateExternalUrl = 8;
			}
			else if (
				((player.getVariableValue('gallery_1') == 10))
			)
			{
				newLogicStateExternalUrl = 9;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._external_3.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._external_3.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._external_3.style[domTransition]='';
				if (me._external_3.ggCurrentLogicStateExternalUrl == 0) {
					me._external_3.ggText=basePath + "gallery/CREW1.jpg";
					me._external_3__img.style.width = '0px';
					me._external_3__img.style.height = '0px';
					me._external_3__img.src=me._external_3.ggText;
				}
				else if (me._external_3.ggCurrentLogicStateExternalUrl == 1) {
					me._external_3.ggText=basePath + "gallery/CREW2.jpg";
					me._external_3__img.style.width = '0px';
					me._external_3__img.style.height = '0px';
					me._external_3__img.src=me._external_3.ggText;
				}
				else if (me._external_3.ggCurrentLogicStateExternalUrl == 2) {
					me._external_3.ggText=basePath + "gallery/CREW3.jpg";
					me._external_3__img.style.width = '0px';
					me._external_3__img.style.height = '0px';
					me._external_3__img.src=me._external_3.ggText;
				}
				else if (me._external_3.ggCurrentLogicStateExternalUrl == 3) {
					me._external_3.ggText=basePath + "gallery/CREW4.jpg";
					me._external_3__img.style.width = '0px';
					me._external_3__img.style.height = '0px';
					me._external_3__img.src=me._external_3.ggText;
				}
				else if (me._external_3.ggCurrentLogicStateExternalUrl == 4) {
					me._external_3.ggText=basePath + "gallery/CREW5.jpg";
					me._external_3__img.style.width = '0px';
					me._external_3__img.style.height = '0px';
					me._external_3__img.src=me._external_3.ggText;
				}
				else if (me._external_3.ggCurrentLogicStateExternalUrl == 5) {
					me._external_3.ggText=basePath + "gallery/CREW6.jpg";
					me._external_3__img.style.width = '0px';
					me._external_3__img.style.height = '0px';
					me._external_3__img.src=me._external_3.ggText;
				}
				else if (me._external_3.ggCurrentLogicStateExternalUrl == 6) {
					me._external_3.ggText=basePath + "gallery/CREW7.jpg";
					me._external_3__img.style.width = '0px';
					me._external_3__img.style.height = '0px';
					me._external_3__img.src=me._external_3.ggText;
				}
				else if (me._external_3.ggCurrentLogicStateExternalUrl == 7) {
					me._external_3.ggText=basePath + "gallery/CREW8.jpg";
					me._external_3__img.style.width = '0px';
					me._external_3__img.style.height = '0px';
					me._external_3__img.src=me._external_3.ggText;
				}
				else if (me._external_3.ggCurrentLogicStateExternalUrl == 8) {
					me._external_3.ggText=basePath + "gallery/CREW9.jpg";
					me._external_3__img.style.width = '0px';
					me._external_3__img.style.height = '0px';
					me._external_3__img.src=me._external_3.ggText;
				}
				else if (me._external_3.ggCurrentLogicStateExternalUrl == 9) {
					me._external_3.ggText=basePath + "gallery/CREW10.jpg";
					me._external_3__img.style.width = '0px';
					me._external_3__img.style.height = '0px';
					me._external_3__img.src=me._external_3.ggText;
				}
				else {
					me._external_3.ggText=basePath + "";
					me._external_3__img.style.width = '0px';
					me._external_3__img.style.height = '0px';
					me._external_3__img.src=me._external_3.ggText;
				}
			}
		}
		me._external_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._external_3.clientWidth;
			var parentHeight = me._external_3.clientHeight;
			var img = me._external_3__img;
			var aspectRatioDiv = me._external_3.clientWidth / me._external_3.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			img.style.width='';
			img.style.height=parentHeight + 'px';
			img.style.left='0px';
			img.style.top='0px';
		}
		me._gallery_background.appendChild(me._external_3);
		el=me._svg_4_1=document.createElement('div');
		els=me._svg_4_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9JiN4ZDsKCS5zdDF7ZmlsbDojMzMzMzMzO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiB4PSItMC4xIiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNi4xLDIyLjUiLz4KIDxwb2x5bGluZSBwb2ludHM9IjMxLjksMjIuNSAxNSwzOS40IDEzLjEsMzcuNSAyOC4xLDIyLjUgMTMuMSw3LjUgMTUsNS42IDMxLjksMjIu'+
			'NSAiLz4KPC9zdmc+Cg==';
		me._svg_4_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_4_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzUyODMwRTtzdHJva2U6IzUyODMwRTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9JiN4ZDsKCS5zdDF7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MntmaWxsOiNGRUZGRkQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iNDUiIHg9Ii0wLjEiIGhlaWdodD0iNDUiLz4KIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTM2LjEsMjIuNSIvPgogPHBvbHlsaW5lIGNsYXNzPSJzdDIiIHBvaW50cz0iMzEuOSwyMi41IDE1LDM5LjQgMTMuMSwz'+
			'Ny41IDI4LjEsMjIuNSAxMy4xLDcuNSAxNSw1LjYgMzEuOSwyMi41ICIvPgo8L3N2Zz4K';
		me._svg_4_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 4_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 9.3361%;';
		hs+='position : absolute;';
		hs+='right : 2.89352%;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 4.7619%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_1') <= 9))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_4_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_4_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_4_1.style[domTransition]='';
				if (me._svg_4_1.ggCurrentLogicStateVisible == 0) {
					me._svg_4_1.style.visibility=(Number(me._svg_4_1.style.opacity)>0||!me._svg_4_1.style.opacity)?'inherit':'hidden';
					me._svg_4_1.ggVisible=true;
				}
				else {
					me._svg_4_1.style.visibility="hidden";
					me._svg_4_1.ggVisible=false;
				}
			}
		}
		me._svg_4_1.onclick=function (e) {
			player.setVariableValue('gallery_1', player.getVariableValue('gallery_1') + Number("1"));
		}
		me._svg_4_1.onmouseover=function (e) {
			me._svg_4_1__img.style.visibility='hidden';
			me._svg_4_1__imgo.style.visibility='inherit';
		}
		me._svg_4_1.onmouseout=function (e) {
			me._svg_4_1__img.style.visibility='inherit';
			me._svg_4_1__imgo.style.visibility='hidden';
		}
		me._svg_4_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._gallery_background.appendChild(me._svg_4_1);
		el=me._svg_5_1=document.createElement('div');
		els=me._svg_5_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9JiN4ZDsKCS5zdDF7ZmlsbDojMzMzMzMzO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiB4PSItMC4xIiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNi4xLDIyLjUiLz4KIDxwb2x5bGluZSBwb2ludHM9IjEzLjEsMjIuNSAzMCw1LjYgMzEuOSw3LjUgMTYuOSwyMi41IDMxLjksMzcuNSAzMCwzOS40IDEzLjEsMjIu'+
			'NSAiLz4KPC9zdmc+Cg==';
		me._svg_5_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_5_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzUyODMwRTtzdHJva2U6IzUyODMwRTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9JiN4ZDsKCS5zdDF7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MntmaWxsOiNGRUZGRkQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iNDUiIHg9Ii0wLjEiIGhlaWdodD0iNDUiLz4KIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTM2LjEsMjIuNSIvPgogPHBvbHlsaW5lIGNsYXNzPSJzdDIiIHBvaW50cz0iMTMuMSwyMi41IDMwLDUuNiAzMS45LDcu'+
			'NSAxNi45LDIyLjUgMzEuOSwzNy41IDMwLDM5LjQgMTMuMSwyMi41ICIvPgo8L3N2Zz4K';
		me._svg_5_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 5_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 9.3361%;';
		hs+='left : 2.89%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 4.7619%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_5_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_1') >= 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_5_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_5_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_5_1.style[domTransition]='';
				if (me._svg_5_1.ggCurrentLogicStateVisible == 0) {
					me._svg_5_1.style.visibility=(Number(me._svg_5_1.style.opacity)>0||!me._svg_5_1.style.opacity)?'inherit':'hidden';
					me._svg_5_1.ggVisible=true;
				}
				else {
					me._svg_5_1.style.visibility="hidden";
					me._svg_5_1.ggVisible=false;
				}
			}
		}
		me._svg_5_1.onclick=function (e) {
			player.setVariableValue('gallery_1', player.getVariableValue('gallery_1') - Number("1"));
		}
		me._svg_5_1.onmouseover=function (e) {
			me._svg_5_1__img.style.visibility='hidden';
			me._svg_5_1__imgo.style.visibility='inherit';
		}
		me._svg_5_1.onmouseout=function (e) {
			me._svg_5_1__img.style.visibility='inherit';
			me._svg_5_1__imgo.style.visibility='hidden';
		}
		me._svg_5_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._gallery_background.appendChild(me._svg_5_1);
		me._rectangle_5.appendChild(me._gallery_background);
		el=me._dig_stop3_tab=document.createElement('div');
		els=me._dig_stop3_tab__img=document.createElement('img');
		els.className='ggskin ggskin_dig_stop3_tab';
		hs=basePath + 'images/dig_stop3_tab.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/dig_stop3_tab__o.png';
		me._dig_stop3_tab__img.ggOverSrc=hs;
		el.ggId="DIG_STOP3_TAB";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 4.84652%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -5.65428%;';
		hs+='visibility : inherit;';
		hs+='width : 16.2037%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dig_stop3_tab.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dig_stop3_tab.onclick=function (e) {
			me._dig_stop3_tab_1.style[domTransition]='none';
			me._dig_stop3_tab_1.style.visibility=(Number(me._dig_stop3_tab_1.style.opacity)>0||!me._dig_stop3_tab_1.style.opacity)?'inherit':'hidden';
			me._dig_stop3_tab_1.ggVisible=true;
			me._dig_stop3d_1.style[domTransition]='none';
			me._dig_stop3d_1.style.visibility='hidden';
			me._dig_stop3d_1.ggVisible=false;
			me._dig_stop3b_1.style[domTransition]='none';
			me._dig_stop3b_1.style.visibility='hidden';
			me._dig_stop3b_1.ggVisible=false;
			me._dig_stop3c_1.style[domTransition]='none';
			me._dig_stop3c_1.style.visibility='hidden';
			me._dig_stop3c_1.ggVisible=false;
			me._video_vimeo_tony.ggInitMedia('');
			me._video_vimeo_tony.style[domTransition]='none';
			me._video_vimeo_tony.style.visibility='hidden';
			me._video_vimeo_tony.ggVisible=false;
			me._video_vimeo_erika.ggInitMedia('');
			me._video_vimeo_erika.style[domTransition]='none';
			me._video_vimeo_erika.style.visibility='hidden';
			me._video_vimeo_erika.ggVisible=false;
			me._video_vimeo_luis.ggInitMedia('');
			me._video_vimeo_luis.style[domTransition]='none';
			me._video_vimeo_luis.style.visibility='hidden';
			me._video_vimeo_luis.ggVisible=false;
			me._gallery_background.style[domTransition]='none';
			me._gallery_background.style.visibility=(Number(me._gallery_background.style.opacity)>0||!me._gallery_background.style.opacity)?'inherit':'hidden';
			me._gallery_background.ggVisible=true;
			gtag('event', 'Image Gallery', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'DIG_STOP3'
});
		}
		me._dig_stop3_tab.onmouseover=function (e) {
			me._dig_stop3_tab__img.src=me._dig_stop3_tab__img.ggOverSrc;
		}
		me._dig_stop3_tab.onmouseout=function (e) {
			me._dig_stop3_tab__img.src=me._dig_stop3_tab__img.ggNormalSrc;
		}
		me._dig_stop3_tab.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._dig_stop3_tab);
		el=me._dig_stop3b=document.createElement('div');
		els=me._dig_stop3b__img=document.createElement('img');
		els.className='ggskin ggskin_dig_stop3b';
		hs=basePath + 'images/dig_stop3b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/dig_stop3b__o.png';
		me._dig_stop3b__img.ggOverSrc=hs;
		el.ggId="DIG_STOP3b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 4.84652%;';
		hs+='left : 16.7824%;';
		hs+='position : absolute;';
		hs+='top : -5.65428%;';
		hs+='visibility : inherit;';
		hs+='width : 16.2037%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dig_stop3b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dig_stop3b.onclick=function (e) {
			if (me._video_vimeo_luis.ggVideoNotLoaded) {
				me._video_vimeo_luis.ggInitMedia(me._video_vimeo_luis.ggVideoSource);
			}
			me._video_vimeo_luis.style[domTransition]='none';
			me._video_vimeo_luis.style.visibility=(Number(me._video_vimeo_luis.style.opacity)>0||!me._video_vimeo_luis.style.opacity)?'inherit':'hidden';
			me._video_vimeo_luis.ggVisible=true;
			me._dig_stop3b_1.style[domTransition]='none';
			me._dig_stop3b_1.style.visibility=(Number(me._dig_stop3b_1.style.opacity)>0||!me._dig_stop3b_1.style.opacity)?'inherit':'hidden';
			me._dig_stop3b_1.ggVisible=true;
			me._dig_stop3c_1.style[domTransition]='none';
			me._dig_stop3c_1.style.visibility='hidden';
			me._dig_stop3c_1.ggVisible=false;
			me._dig_stop3_tab_1.style[domTransition]='none';
			me._dig_stop3_tab_1.style.visibility='hidden';
			me._dig_stop3_tab_1.ggVisible=false;
			me._dig_stop3d_1.style[domTransition]='none';
			me._dig_stop3d_1.style.visibility='hidden';
			me._dig_stop3d_1.ggVisible=false;
			me._video_vimeo_erika.ggInitMedia('');
			me._video_vimeo_erika.style[domTransition]='none';
			me._video_vimeo_erika.style.visibility='hidden';
			me._video_vimeo_erika.ggVisible=false;
			me._video_vimeo_tony.ggInitMedia('');
			me._video_vimeo_tony.style[domTransition]='none';
			me._video_vimeo_tony.style.visibility='hidden';
			me._video_vimeo_tony.ggVisible=false;
			me._gallery_background.style[domTransition]='none';
			me._gallery_background.style.visibility='hidden';
			me._gallery_background.ggVisible=false;
			gtag('event', 'Dr. Luis Chiappe', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'DIG_STOP3b'
});
		}
		me._dig_stop3b.onmouseover=function (e) {
			me._dig_stop3b__img.src=me._dig_stop3b__img.ggOverSrc;
		}
		me._dig_stop3b.onmouseout=function (e) {
			me._dig_stop3b__img.src=me._dig_stop3b__img.ggNormalSrc;
		}
		me._dig_stop3b.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._dig_stop3b);
		el=me._dig_stop3c=document.createElement('div');
		els=me._dig_stop3c__img=document.createElement('img');
		els.className='ggskin ggskin_dig_stop3c';
		hs=basePath + 'images/dig_stop3c.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/dig_stop3c__o.png';
		me._dig_stop3c__img.ggOverSrc=hs;
		el.ggId="DIG_STOP3c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 4.84652%;';
		hs+='left : 33.5648%;';
		hs+='position : absolute;';
		hs+='top : -5.65428%;';
		hs+='visibility : inherit;';
		hs+='width : 16.2037%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dig_stop3c.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dig_stop3c.onclick=function (e) {
			me._gallery_background.style[domTransition]='none';
			me._gallery_background.style.visibility='hidden';
			me._gallery_background.ggVisible=false;
			me._video_vimeo_tony.ggInitMedia('');
			me._video_vimeo_tony.style[domTransition]='none';
			me._video_vimeo_tony.style.visibility='hidden';
			me._video_vimeo_tony.ggVisible=false;
			me._video_vimeo_luis.ggInitMedia('');
			me._video_vimeo_luis.style[domTransition]='none';
			me._video_vimeo_luis.style.visibility='hidden';
			me._video_vimeo_luis.ggVisible=false;
			me._dig_stop3b_1.style[domTransition]='none';
			me._dig_stop3b_1.style.visibility='hidden';
			me._dig_stop3b_1.ggVisible=false;
			me._dig_stop3_tab_1.style[domTransition]='none';
			me._dig_stop3_tab_1.style.visibility='hidden';
			me._dig_stop3_tab_1.ggVisible=false;
			me._dig_stop3c_1.style[domTransition]='none';
			me._dig_stop3c_1.style.visibility=(Number(me._dig_stop3c_1.style.opacity)>0||!me._dig_stop3c_1.style.opacity)?'inherit':'hidden';
			me._dig_stop3c_1.ggVisible=true;
			me._dig_stop3d_1.style[domTransition]='none';
			me._dig_stop3d_1.style.visibility='hidden';
			me._dig_stop3d_1.ggVisible=false;
			if (me._video_vimeo_erika.ggVideoNotLoaded) {
				me._video_vimeo_erika.ggInitMedia(me._video_vimeo_erika.ggVideoSource);
			}
			me._video_vimeo_erika.style[domTransition]='none';
			me._video_vimeo_erika.style.visibility=(Number(me._video_vimeo_erika.style.opacity)>0||!me._video_vimeo_erika.style.opacity)?'inherit':'hidden';
			me._video_vimeo_erika.ggVisible=true;
			gtag('event', 'Erika Durazo', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'DIG_STOP3c'
});
		}
		me._dig_stop3c.onmouseover=function (e) {
			me._dig_stop3c__img.src=me._dig_stop3c__img.ggOverSrc;
		}
		me._dig_stop3c.onmouseout=function (e) {
			me._dig_stop3c__img.src=me._dig_stop3c__img.ggNormalSrc;
		}
		me._dig_stop3c.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._dig_stop3c);
		el=me._dig_stop3d=document.createElement('div');
		els=me._dig_stop3d__img=document.createElement('img');
		els.className='ggskin ggskin_dig_stop3d';
		hs=basePath + 'images/dig_stop3d.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/dig_stop3d__o.png';
		me._dig_stop3d__img.ggOverSrc=hs;
		el.ggId="DIG_STOP3d";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 4.84652%;';
		hs+='left : 50.3472%;';
		hs+='position : absolute;';
		hs+='top : -5.65428%;';
		hs+='visibility : inherit;';
		hs+='width : 16.2037%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dig_stop3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dig_stop3d.onclick=function (e) {
			if (me._video_vimeo_tony.ggVideoNotLoaded) {
				me._video_vimeo_tony.ggInitMedia(me._video_vimeo_tony.ggVideoSource);
			}
			me._video_vimeo_tony.style[domTransition]='none';
			me._video_vimeo_tony.style.visibility=(Number(me._video_vimeo_tony.style.opacity)>0||!me._video_vimeo_tony.style.opacity)?'inherit':'hidden';
			me._video_vimeo_tony.ggVisible=true;
			me._dig_stop3d_1.style[domTransition]='none';
			me._dig_stop3d_1.style.visibility=(Number(me._dig_stop3d_1.style.opacity)>0||!me._dig_stop3d_1.style.opacity)?'inherit':'hidden';
			me._dig_stop3d_1.ggVisible=true;
			me._dig_stop3b_1.style[domTransition]='none';
			me._dig_stop3b_1.style.visibility='hidden';
			me._dig_stop3b_1.ggVisible=false;
			me._dig_stop3_tab_1.style[domTransition]='none';
			me._dig_stop3_tab_1.style.visibility='hidden';
			me._dig_stop3_tab_1.ggVisible=false;
			me._dig_stop3c_1.style[domTransition]='none';
			me._dig_stop3c_1.style.visibility='hidden';
			me._dig_stop3c_1.ggVisible=false;
			me._video_vimeo_erika.ggInitMedia('');
			me._video_vimeo_erika.style[domTransition]='none';
			me._video_vimeo_erika.style.visibility='hidden';
			me._video_vimeo_erika.ggVisible=false;
			me._video_vimeo_luis.ggInitMedia('');
			me._video_vimeo_luis.style[domTransition]='none';
			me._video_vimeo_luis.style.visibility='hidden';
			me._video_vimeo_luis.ggVisible=false;
			me._gallery_background.style[domTransition]='none';
			me._gallery_background.style.visibility='hidden';
			me._gallery_background.ggVisible=false;
			gtag('event', 'Tony Turner', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'DIG_STOP3d'
});
		}
		me._dig_stop3d.onmouseover=function (e) {
			me._dig_stop3d__img.src=me._dig_stop3d__img.ggOverSrc;
		}
		me._dig_stop3d.onmouseout=function (e) {
			me._dig_stop3d__img.src=me._dig_stop3d__img.ggNormalSrc;
		}
		me._dig_stop3d.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._dig_stop3d);
		el=me._dig_stop3_tab_1=document.createElement('div');
		els=me._dig_stop3_tab_1__img=document.createElement('img');
		els.className='ggskin ggskin_dig_stop3_tab_1';
		hs=basePath + 'images/dig_stop3_tab_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="DIG_STOP3_TAB_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 4.84652%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -5.65428%;';
		hs+='visibility : inherit;';
		hs+='width : 16.2037%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dig_stop3_tab_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dig_stop3_tab_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._dig_stop3_tab_1);
		el=me._dig_stop3b_1=document.createElement('div');
		els=me._dig_stop3b_1__img=document.createElement('img');
		els.className='ggskin ggskin_dig_stop3b_1';
		hs=basePath + 'images/dig_stop3b_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="DIG_STOP3b_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 4.84652%;';
		hs+='left : 16.7824%;';
		hs+='position : absolute;';
		hs+='top : -5.65428%;';
		hs+='visibility : hidden;';
		hs+='width : 16.2037%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dig_stop3b_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dig_stop3b_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._dig_stop3b_1);
		el=me._dig_stop3c_1=document.createElement('div');
		els=me._dig_stop3c_1__img=document.createElement('img');
		els.className='ggskin ggskin_dig_stop3c_1';
		hs=basePath + 'images/dig_stop3c_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="DIG_STOP3c_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 4.84652%;';
		hs+='left : 33.5648%;';
		hs+='position : absolute;';
		hs+='top : -5.65428%;';
		hs+='visibility : hidden;';
		hs+='width : 16.2037%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dig_stop3c_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dig_stop3c_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._dig_stop3c_1);
		el=me._dig_stop3d_1=document.createElement('div');
		els=me._dig_stop3d_1__img=document.createElement('img');
		els.className='ggskin ggskin_dig_stop3d_1';
		hs=basePath + 'images/dig_stop3d_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="DIG_STOP3d_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 4.84652%;';
		hs+='left : 50.3472%;';
		hs+='position : absolute;';
		hs+='top : -5.65%;';
		hs+='visibility : hidden;';
		hs+='width : 16.2037%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dig_stop3d_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dig_stop3d_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._dig_stop3d_1);
		me._container_frame_video_2.appendChild(me._rectangle_5);
		me._iframe_crew.appendChild(me._container_frame_video_2);
		me.divSkin.appendChild(me._iframe_crew);
		el=me._iframe_arrival=document.createElement('div');
		el.ggId="iframe_ARRIVAL";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._iframe_arrival.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._iframe_arrival.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width >= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._iframe_arrival.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._iframe_arrival.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._iframe_arrival.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_arrival.ggCurrentLogicStateScaling == 0) {
					me._iframe_arrival.ggParameter.sx = 0.9;
					me._iframe_arrival.ggParameter.sy = 0.9;
					me._iframe_arrival.style[domTransform]=parameterToTransform(me._iframe_arrival.ggParameter);
				}
				else if (me._iframe_arrival.ggCurrentLogicStateScaling == 1) {
					me._iframe_arrival.ggParameter.sx = 1.4;
					me._iframe_arrival.ggParameter.sy = 1.4;
					me._iframe_arrival.style[domTransform]=parameterToTransform(me._iframe_arrival.ggParameter);
				}
				else {
					me._iframe_arrival.ggParameter.sx = 1;
					me._iframe_arrival.ggParameter.sy = 1;
					me._iframe_arrival.style[domTransform]=parameterToTransform(me._iframe_arrival.ggParameter);
				}
			}
		}
		me._iframe_arrival.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('arrival_iframe') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._iframe_arrival.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._iframe_arrival.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._iframe_arrival.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_arrival.ggCurrentLogicStateVisible == 0) {
					me._iframe_arrival.style.visibility=(Number(me._iframe_arrival.style.opacity)>0||!me._iframe_arrival.style.opacity)?'inherit':'hidden';
					me._iframe_arrival.ggVisible=true;
				}
				else {
					me._iframe_arrival.style.visibility="hidden";
					me._iframe_arrival.ggVisible=false;
				}
			}
		}
		me._iframe_arrival.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_frame_video_1=document.createElement('div');
		el.ggId="Container frame_video_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(55vw*0.7187);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 55vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_frame_video_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_frame_video_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._left_13=document.createElement('div');
		el.ggId="left_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_video_1.appendChild(me._left_13);
		el=me._right_13=document.createElement('div');
		el.ggId="right_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._right_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_video_1.appendChild(me._right_13);
		el=me._bottom_13=document.createElement('div');
		el.ggId="bottom_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bottom_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bottom_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_frame_video_1.appendChild(me._bottom_13);
		el=me._top_13=document.createElement('div');
		el.ggId="top_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._top_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._top_13.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_video_1.appendChild(me._top_13);
		el=me._svg_2_2_1=document.createElement('div');
		els=me._svg_2_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_2_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2_2_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojNTI4MzBFO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_2_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2_2_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6.52174%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 4.6875%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_2_1.onclick=function (e) {
			player.setVariableValue('arrival_iframe', false);
			player.setVariableValue('vis_active_skin', true);
			me._video_vimeo_arrival.ggInitMedia("");
			me._video_vimeo_arrival.ggInitMedia('');
			me._video_vimeo_arrival.style[domTransition]='none';
			me._video_vimeo_arrival.style.visibility='hidden';
			me._video_vimeo_arrival.ggVisible=false;
		}
		me._svg_2_2_1.onmouseover=function (e) {
			me._svg_2_2_1__img.style.visibility='hidden';
			me._svg_2_2_1__imgo.style.visibility='inherit';
		}
		me._svg_2_2_1.onmouseout=function (e) {
			me._svg_2_2_1__img.style.visibility='inherit';
			me._svg_2_2_1__imgo.style.visibility='hidden';
		}
		me._svg_2_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_video_1.appendChild(me._svg_2_2_1);
		el=me._rectangle_5_3=document.createElement('div');
		el.ggId="Rectangle 5_3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_5_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs=basePath + 'images/image_5.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 2%;';
		hs+='height : 23.6055%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_5_3.appendChild(me._image_5);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 74.1242%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_5_3.appendChild(me._text_2);
		el=me._video_vimeo_arrival=document.createElement('div');
		me._video_vimeo_arrival.seekbars = [];
		me._video_vimeo_arrival.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_vimeo_arrival.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_vimeo_arrival.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_vimeo_arrival.hasChildNodes()) {
				me._video_vimeo_arrival.removeChild(me._video_vimeo_arrival.lastChild);
			}
			if (me._video_vimeo_arrival__vid) {
				me._video_vimeo_arrival__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._video_vimeo_arrival.ggVideoNotLoaded ==false && me._video_vimeo_arrival.ggDeactivate) { me._video_vimeo_arrival.ggDeactivate(); }
				me._video_vimeo_arrival.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_vimeo_arrival');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_vimeo_arrival.ggVideoNotLoaded = false;
			me._video_vimeo_arrival__vid=document.createElement('video');
			me._video_vimeo_arrival__vid.className='ggskin ggskin_video';
			me._video_vimeo_arrival__vid.setAttribute('width', '100%');
			me._video_vimeo_arrival__vid.setAttribute('height', '100%');
			me._video_vimeo_arrival__vid.setAttribute('controlsList', 'nodownload');
			me._video_vimeo_arrival__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_vimeo_arrival__vid.setAttribute('autoplay', '');
			me._video_vimeo_arrival__vid.setAttribute('controls', '');
			me._video_vimeo_arrival__source=document.createElement('source');
			me._video_vimeo_arrival__source.setAttribute('src', media);
			me._video_vimeo_arrival__vid.setAttribute('playsinline', 'playsinline');
			me._video_vimeo_arrival__vid.setAttribute('style', ';');
			me._video_vimeo_arrival__vid.style.outline = 'none';
			me._video_vimeo_arrival__vid.appendChild(me._video_vimeo_arrival__source);
			me._video_vimeo_arrival.appendChild(me._video_vimeo_arrival__vid);
			var videoEl = player.registerVideoElement('Video_vimeo_ARRIVAL', me._video_vimeo_arrival__vid);
			videoEl.autoplay = true;
			notifySeekbars();
			me._video_vimeo_arrival.ggVideoSource = media;
		}
		el.ggId="Video_vimeo_ARRIVAL";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 72%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_vimeo_arrival.ggIsActive=function() {
			if (me._video_vimeo_arrival__vid != null) {
				return (me._video_vimeo_arrival__vid.paused == false && me._video_vimeo_arrival__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_vimeo_arrival.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_5_3.appendChild(me._video_vimeo_arrival);
		me._container_frame_video_1.appendChild(me._rectangle_5_3);
		me._iframe_arrival.appendChild(me._container_frame_video_1);
		me.divSkin.appendChild(me._iframe_arrival);
		el=me._iframe_green=document.createElement('div');
		el.ggId="iframe_GREEN";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._iframe_green.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._iframe_green.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width >= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._iframe_green.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._iframe_green.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._iframe_green.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_green.ggCurrentLogicStateScaling == 0) {
					me._iframe_green.ggParameter.sx = 0.9;
					me._iframe_green.ggParameter.sy = 0.9;
					me._iframe_green.style[domTransform]=parameterToTransform(me._iframe_green.ggParameter);
				}
				else if (me._iframe_green.ggCurrentLogicStateScaling == 1) {
					me._iframe_green.ggParameter.sx = 1.4;
					me._iframe_green.ggParameter.sy = 1.4;
					me._iframe_green.style[domTransform]=parameterToTransform(me._iframe_green.ggParameter);
				}
				else {
					me._iframe_green.ggParameter.sx = 1;
					me._iframe_green.ggParameter.sy = 1;
					me._iframe_green.style[domTransform]=parameterToTransform(me._iframe_green.ggParameter);
				}
			}
		}
		me._iframe_green.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('green_iframe') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._iframe_green.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._iframe_green.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._iframe_green.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_green.ggCurrentLogicStateVisible == 0) {
					me._iframe_green.style.visibility=(Number(me._iframe_green.style.opacity)>0||!me._iframe_green.style.opacity)?'inherit':'hidden';
					me._iframe_green.ggVisible=true;
				}
				else {
					me._iframe_green.style.visibility="hidden";
					me._iframe_green.ggVisible=false;
				}
			}
		}
		me._iframe_green.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_frame_video_1_2=document.createElement('div');
		el.ggId="Container frame_video_1_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(60vw*0.6614);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_frame_video_1_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_frame_video_1_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._left_12=document.createElement('div');
		el.ggId="left_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_video_1_2.appendChild(me._left_12);
		el=me._right_12=document.createElement('div');
		el.ggId="right_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._right_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_video_1_2.appendChild(me._right_12);
		el=me._bottom_12=document.createElement('div');
		el.ggId="bottom_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bottom_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bottom_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_frame_video_1_2.appendChild(me._bottom_12);
		el=me._top_12=document.createElement('div');
		el.ggId="top_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._top_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._top_12.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_video_1_2.appendChild(me._top_12);
		el=me._svg_2_3=document.createElement('div');
		els=me._svg_2_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2_3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojNTI4MzBFO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_3__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6.52174%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 4.6875%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_3.onclick=function (e) {
			player.setVariableValue('green_iframe', false);
			player.setVariableValue('vis_active_skin', true);
		}
		me._svg_2_3.onmouseover=function (e) {
			me._svg_2_3__img.style.visibility='hidden';
			me._svg_2_3__imgo.style.visibility='inherit';
		}
		me._svg_2_3.onmouseout=function (e) {
			me._svg_2_3__img.style.visibility='inherit';
			me._svg_2_3__imgo.style.visibility='hidden';
		}
		me._svg_2_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_video_1_2.appendChild(me._svg_2_3);
		el=me._rectangle_5_1=document.createElement('div');
		el.ggId="Rectangle 5_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 89.9865%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_5_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs=basePath + 'images/image_6.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 3%;';
		hs+='height : 26.6007%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 96.9907%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_5_1.appendChild(me._image_6);
		el=me._gallery_background_1=document.createElement('div');
		el.ggId="GALLERY_background_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 70.0017%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -0.22%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_background_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_background_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		el=me._external_4=document.createElement('div');
		els=me._external_4__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._external_4.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="External 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 82.2917%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._external_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._external_4.logicBlock_externalurl = function() {
			var newLogicStateExternalUrl;
			if (
				((player.getVariableValue('gallery_3') == 1))
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				((player.getVariableValue('gallery_3') == 2))
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				((player.getVariableValue('gallery_3') == 3))
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				((player.getVariableValue('gallery_3') == 4))
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				((player.getVariableValue('gallery_3') == 5))
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				((player.getVariableValue('gallery_3') == 6))
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				((player.getVariableValue('gallery_3') == 7))
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._external_4.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._external_4.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._external_4.style[domTransition]='';
				if (me._external_4.ggCurrentLogicStateExternalUrl == 0) {
					me._external_4.ggText=basePath + "gallery/GREEN1.jpg";
					me._external_4__img.style.width = '0px';
					me._external_4__img.style.height = '0px';
					me._external_4__img.src=me._external_4.ggText;
				}
				else if (me._external_4.ggCurrentLogicStateExternalUrl == 1) {
					me._external_4.ggText=basePath + "gallery/GREEN2.jpg";
					me._external_4__img.style.width = '0px';
					me._external_4__img.style.height = '0px';
					me._external_4__img.src=me._external_4.ggText;
				}
				else if (me._external_4.ggCurrentLogicStateExternalUrl == 2) {
					me._external_4.ggText=basePath + "gallery/GREEN3.jpg";
					me._external_4__img.style.width = '0px';
					me._external_4__img.style.height = '0px';
					me._external_4__img.src=me._external_4.ggText;
				}
				else if (me._external_4.ggCurrentLogicStateExternalUrl == 3) {
					me._external_4.ggText=basePath + "gallery/GREEN4.jpg";
					me._external_4__img.style.width = '0px';
					me._external_4__img.style.height = '0px';
					me._external_4__img.src=me._external_4.ggText;
				}
				else if (me._external_4.ggCurrentLogicStateExternalUrl == 4) {
					me._external_4.ggText=basePath + "gallery/GREEN5.jpg";
					me._external_4__img.style.width = '0px';
					me._external_4__img.style.height = '0px';
					me._external_4__img.src=me._external_4.ggText;
				}
				else if (me._external_4.ggCurrentLogicStateExternalUrl == 5) {
					me._external_4.ggText=basePath + "gallery/GREEN6.jpg";
					me._external_4__img.style.width = '0px';
					me._external_4__img.style.height = '0px';
					me._external_4__img.src=me._external_4.ggText;
				}
				else if (me._external_4.ggCurrentLogicStateExternalUrl == 6) {
					me._external_4.ggText=basePath + "gallery/GREEN7.jpg";
					me._external_4__img.style.width = '0px';
					me._external_4__img.style.height = '0px';
					me._external_4__img.src=me._external_4.ggText;
				}
				else {
					me._external_4.ggText=basePath + "";
					me._external_4__img.style.width = '0px';
					me._external_4__img.style.height = '0px';
					me._external_4__img.src=me._external_4.ggText;
				}
			}
		}
		me._external_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._external_4.clientWidth;
			var parentHeight = me._external_4.clientHeight;
			var img = me._external_4__img;
			var aspectRatioDiv = me._external_4.clientWidth / me._external_4.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			img.style.width='';
			img.style.height=parentHeight + 'px';
			img.style.left='0px';
			img.style.top='0px';
		}
		me._gallery_background_1.appendChild(me._external_4);
		el=me._svg_4_2=document.createElement('div');
		els=me._svg_4_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9JiN4ZDsKCS5zdDF7ZmlsbDojMzMzMzMzO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiB4PSItMC4xIiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNi4xLDIyLjUiLz4KIDxwb2x5bGluZSBwb2ludHM9IjMxLjksMjIuNSAxNSwzOS40IDEzLjEsMzcuNSAyOC4xLDIyLjUgMTMuMSw3LjUgMTUsNS42IDMxLjksMjIu'+
			'NSAiLz4KPC9zdmc+Cg==';
		me._svg_4_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_4_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzUyODMwRTtzdHJva2U6IzUyODMwRTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9JiN4ZDsKCS5zdDF7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MntmaWxsOiNGRUZGRkQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iNDUiIHg9Ii0wLjEiIGhlaWdodD0iNDUiLz4KIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTM2LjEsMjIuNSIvPgogPHBvbHlsaW5lIGNsYXNzPSJzdDIiIHBvaW50cz0iMzEuOSwyMi41IDE1LDM5LjQgMTMuMSwz'+
			'Ny41IDI4LjEsMjIuNSAxMy4xLDcuNSAxNSw1LjYgMzEuOSwyMi41ICIvPgo8L3N2Zz4K';
		me._svg_4_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 4_2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 9.3361%;';
		hs+='position : absolute;';
		hs+='right : 2.89352%;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 4.7619%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_3') <= 6))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_4_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_4_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_4_2.style[domTransition]='';
				if (me._svg_4_2.ggCurrentLogicStateVisible == 0) {
					me._svg_4_2.style.visibility=(Number(me._svg_4_2.style.opacity)>0||!me._svg_4_2.style.opacity)?'inherit':'hidden';
					me._svg_4_2.ggVisible=true;
				}
				else {
					me._svg_4_2.style.visibility="hidden";
					me._svg_4_2.ggVisible=false;
				}
			}
		}
		me._svg_4_2.onclick=function (e) {
			player.setVariableValue('gallery_3', player.getVariableValue('gallery_3') + Number("1"));
		}
		me._svg_4_2.onmouseover=function (e) {
			me._svg_4_2__img.style.visibility='hidden';
			me._svg_4_2__imgo.style.visibility='inherit';
		}
		me._svg_4_2.onmouseout=function (e) {
			me._svg_4_2__img.style.visibility='inherit';
			me._svg_4_2__imgo.style.visibility='hidden';
		}
		me._svg_4_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._gallery_background_1.appendChild(me._svg_4_2);
		el=me._svg_4_3=document.createElement('div');
		els=me._svg_4_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9JiN4ZDsKCS5zdDF7ZmlsbDojMzMzMzMzO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiB4PSItMC4xIiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNi4xLDIyLjUiLz4KIDxwb2x5bGluZSBwb2ludHM9IjEzLjEsMjIuNSAzMCw1LjYgMzEuOSw3LjUgMTYuOSwyMi41IDMxLjksMzcuNSAzMCwzOS40IDEzLjEsMjIu'+
			'NSAiLz4KPC9zdmc+Cg==';
		me._svg_4_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_4_3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzUyODMwRTtzdHJva2U6IzUyODMwRTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9JiN4ZDsKCS5zdDF7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MntmaWxsOiNGRUZGRkQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iNDUiIHg9Ii0wLjEiIGhlaWdodD0iNDUiLz4KIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTM2LjEsMjIuNSIvPgogPHBvbHlsaW5lIGNsYXNzPSJzdDIiIHBvaW50cz0iMTMuMSwyMi41IDMwLDUuNiAzMS45LDcu'+
			'NSAxNi45LDIyLjUgMzEuOSwzNy41IDMwLDM5LjQgMTMuMSwyMi41ICIvPgo8L3N2Zz4K';
		me._svg_4_3__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 4_3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 9.3361%;';
		hs+='left : 2.89%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 4.7619%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_3') >= 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_4_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_4_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_4_3.style[domTransition]='';
				if (me._svg_4_3.ggCurrentLogicStateVisible == 0) {
					me._svg_4_3.style.visibility=(Number(me._svg_4_3.style.opacity)>0||!me._svg_4_3.style.opacity)?'inherit':'hidden';
					me._svg_4_3.ggVisible=true;
				}
				else {
					me._svg_4_3.style.visibility="hidden";
					me._svg_4_3.ggVisible=false;
				}
			}
		}
		me._svg_4_3.onclick=function (e) {
			player.setVariableValue('gallery_3', player.getVariableValue('gallery_3') - Number("1"));
		}
		me._svg_4_3.onmouseover=function (e) {
			me._svg_4_3__img.style.visibility='hidden';
			me._svg_4_3__imgo.style.visibility='inherit';
		}
		me._svg_4_3.onmouseout=function (e) {
			me._svg_4_3__img.style.visibility='inherit';
			me._svg_4_3__imgo.style.visibility='hidden';
		}
		me._svg_4_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._gallery_background_1.appendChild(me._svg_4_3);
		me._rectangle_5_1.appendChild(me._gallery_background_1);
		me._container_frame_video_1_2.appendChild(me._rectangle_5_1);
		me._iframe_green.appendChild(me._container_frame_video_1_2);
		me.divSkin.appendChild(me._iframe_green);
		el=me._iframe_library=document.createElement('div');
		el.ggId="iframe_library";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._iframe_library.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._iframe_library.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width >= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._iframe_library.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._iframe_library.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._iframe_library.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_library.ggCurrentLogicStateScaling == 0) {
					me._iframe_library.ggParameter.sx = 0.9;
					me._iframe_library.ggParameter.sy = 0.9;
					me._iframe_library.style[domTransform]=parameterToTransform(me._iframe_library.ggParameter);
				}
				else if (me._iframe_library.ggCurrentLogicStateScaling == 1) {
					me._iframe_library.ggParameter.sx = 1.4;
					me._iframe_library.ggParameter.sy = 1.4;
					me._iframe_library.style[domTransform]=parameterToTransform(me._iframe_library.ggParameter);
				}
				else {
					me._iframe_library.ggParameter.sx = 1;
					me._iframe_library.ggParameter.sy = 1;
					me._iframe_library.style[domTransform]=parameterToTransform(me._iframe_library.ggParameter);
				}
			}
		}
		me._iframe_library.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('library_iframe') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._iframe_library.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._iframe_library.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._iframe_library.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_library.ggCurrentLogicStateVisible == 0) {
					me._iframe_library.style.visibility=(Number(me._iframe_library.style.opacity)>0||!me._iframe_library.style.opacity)?'inherit':'hidden';
					me._iframe_library.ggVisible=true;
				}
				else {
					me._iframe_library.style.visibility="hidden";
					me._iframe_library.ggVisible=false;
				}
			}
		}
		me._iframe_library.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_frame_video_1_1=document.createElement('div');
		el.ggId="Container frame_video_1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(55vw*0.7187);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 55vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_frame_video_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_frame_video_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._left_11=document.createElement('div');
		el.ggId="left_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_video_1_1.appendChild(me._left_11);
		el=me._right_11=document.createElement('div');
		el.ggId="right_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._right_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_video_1_1.appendChild(me._right_11);
		el=me._bottom_11=document.createElement('div');
		el.ggId="bottom_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bottom_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bottom_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_frame_video_1_1.appendChild(me._bottom_11);
		el=me._top_11=document.createElement('div');
		el.ggId="top_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._top_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._top_11.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_video_1_1.appendChild(me._top_11);
		el=me._svg_2_3_1=document.createElement('div');
		els=me._svg_2_3_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_3_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2_3_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojNTI4MzBFO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_3_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2_3_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6.52174%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 4.6875%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2_3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_3_1.onclick=function (e) {
			player.setVariableValue('library_iframe', false);
			player.setVariableValue('vis_active_skin', true);
			me._video_youtube_library.ggInitMedia('');
			me._video_youtube_library.style[domTransition]='none';
			me._video_youtube_library.style.visibility='hidden';
			me._video_youtube_library.ggVisible=false;
			me._video_youtube_library.ggInitMedia("");
		}
		me._svg_2_3_1.onmouseover=function (e) {
			me._svg_2_3_1__img.style.visibility='hidden';
			me._svg_2_3_1__imgo.style.visibility='inherit';
		}
		me._svg_2_3_1.onmouseout=function (e) {
			me._svg_2_3_1__img.style.visibility='inherit';
			me._svg_2_3_1__imgo.style.visibility='hidden';
		}
		me._svg_2_3_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_video_1_1.appendChild(me._svg_2_3_1);
		el=me._rectangle_5_1_1=document.createElement('div');
		el.ggId="Rectangle 5_1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_5_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._video_youtube_library=document.createElement('div');
		me._video_youtube_library.seekbars = [];
		me._video_youtube_library.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_youtube_library.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_youtube_library.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_youtube_library.hasChildNodes()) {
				me._video_youtube_library.removeChild(me._video_youtube_library.lastChild);
			}
			if (me._video_youtube_library__vid) {
				me._video_youtube_library__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._video_youtube_library.ggVideoNotLoaded ==false && me._video_youtube_library.ggDeactivate) { me._video_youtube_library.ggDeactivate(); }
				me._video_youtube_library.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_youtube_library');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_youtube_library.ggVideoNotLoaded = false;
			me._video_youtube_library__vid=document.createElement('video');
			me._video_youtube_library__vid.className='ggskin ggskin_video';
			me._video_youtube_library__vid.setAttribute('width', '100%');
			me._video_youtube_library__vid.setAttribute('height', '100%');
			me._video_youtube_library__vid.setAttribute('controlsList', 'nodownload');
			me._video_youtube_library__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_youtube_library__vid.setAttribute('autoplay', '');
			me._video_youtube_library__vid.setAttribute('controls', '');
			me._video_youtube_library__source=document.createElement('source');
			me._video_youtube_library__source.setAttribute('src', media);
			me._video_youtube_library__vid.setAttribute('playsinline', 'playsinline');
			me._video_youtube_library__vid.setAttribute('style', ';');
			me._video_youtube_library__vid.style.outline = 'none';
			me._video_youtube_library__vid.appendChild(me._video_youtube_library__source);
			me._video_youtube_library.appendChild(me._video_youtube_library__vid);
			var videoEl = player.registerVideoElement('Video_youtube_library', me._video_youtube_library__vid);
			videoEl.autoplay = true;
			notifySeekbars();
			me._video_youtube_library.ggVideoSource = media;
		}
		el.ggId="Video_youtube_library";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 78.9216%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_youtube_library.ggIsActive=function() {
			if (me._video_youtube_library__vid != null) {
				return (me._video_youtube_library__vid.paused == false && me._video_youtube_library__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_youtube_library.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_5_1_1.appendChild(me._video_youtube_library);
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs=basePath + 'images/image_7.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 2%;';
		hs+='height : 16.6667%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_5_1_1.appendChild(me._image_7);
		me._container_frame_video_1_1.appendChild(me._rectangle_5_1_1);
		me._iframe_library.appendChild(me._container_frame_video_1_1);
		me.divSkin.appendChild(me._iframe_library);
		el=me._iframe_skeleton=document.createElement('div');
		el.ggId="iframe_skeleton";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._iframe_skeleton.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._iframe_skeleton.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width >= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._iframe_skeleton.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._iframe_skeleton.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._iframe_skeleton.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_skeleton.ggCurrentLogicStateScaling == 0) {
					me._iframe_skeleton.ggParameter.sx = 0.9;
					me._iframe_skeleton.ggParameter.sy = 0.9;
					me._iframe_skeleton.style[domTransform]=parameterToTransform(me._iframe_skeleton.ggParameter);
				}
				else if (me._iframe_skeleton.ggCurrentLogicStateScaling == 1) {
					me._iframe_skeleton.ggParameter.sx = 1.4;
					me._iframe_skeleton.ggParameter.sy = 1.4;
					me._iframe_skeleton.style[domTransform]=parameterToTransform(me._iframe_skeleton.ggParameter);
				}
				else {
					me._iframe_skeleton.ggParameter.sx = 1;
					me._iframe_skeleton.ggParameter.sy = 1;
					me._iframe_skeleton.style[domTransform]=parameterToTransform(me._iframe_skeleton.ggParameter);
				}
			}
		}
		me._iframe_skeleton.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('skeleton_iframe') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._iframe_skeleton.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._iframe_skeleton.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._iframe_skeleton.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_skeleton.ggCurrentLogicStateVisible == 0) {
					me._iframe_skeleton.style.visibility=(Number(me._iframe_skeleton.style.opacity)>0||!me._iframe_skeleton.style.opacity)?'inherit':'hidden';
					me._iframe_skeleton.ggVisible=true;
				}
				else {
					me._iframe_skeleton.style.visibility="hidden";
					me._iframe_skeleton.ggVisible=false;
				}
			}
		}
		me._iframe_skeleton.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_frame_1=document.createElement('div');
		el.ggId="Container frame_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(60vw*0.6857);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_frame_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_frame_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._left_10=document.createElement('div');
		el.ggId="left_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_1.appendChild(me._left_10);
		el=me._right_10=document.createElement('div');
		el.ggId="right_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._right_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_1.appendChild(me._right_10);
		el=me._bottom_10=document.createElement('div');
		el.ggId="bottom_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bottom_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bottom_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_frame_1.appendChild(me._bottom_10);
		el=me._top_10=document.createElement('div');
		el.ggId="top_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._top_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._top_10.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_1.appendChild(me._top_10);
		el=me._svg_2_4=document.createElement('div');
		els=me._svg_2_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2_4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojNTI4MzBFO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_4__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2_4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6.52174%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 4.6875%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_4.onclick=function (e) {
			player.setVariableValue('skeleton_iframe', false);
			player.setVariableValue('vis_active_skin', true);
		}
		me._svg_2_4.onmouseover=function (e) {
			me._svg_2_4__img.style.visibility='hidden';
			me._svg_2_4__imgo.style.visibility='inherit';
		}
		me._svg_2_4.onmouseout=function (e) {
			me._svg_2_4__img.style.visibility='inherit';
			me._svg_2_4__imgo.style.visibility='hidden';
		}
		me._svg_2_4.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_1.appendChild(me._svg_2_4);
		el=me._rectangle_5_2=document.createElement('div');
		el.ggId="Rectangle 5_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_5_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._gallery_background_skeleton=document.createElement('div');
		el.ggId="GALLERY_background_skeleton";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 74.3827%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_background_skeleton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_background_skeleton.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 76.6138%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._external_2.logicBlock_externalurl = function() {
			var newLogicStateExternalUrl;
			if (
				((player.getVariableValue('gallery_2') == 1))
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				((player.getVariableValue('gallery_2') == 2))
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				((player.getVariableValue('gallery_2') == 3))
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				((player.getVariableValue('gallery_2') == 4))
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				((player.getVariableValue('gallery_2') == 5))
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				((player.getVariableValue('gallery_2') == 6))
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				((player.getVariableValue('gallery_2') == 7))
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else if (
				((player.getVariableValue('gallery_2') == 8))
			)
			{
				newLogicStateExternalUrl = 7;
			}
			else if (
				((player.getVariableValue('gallery_2') == 9))
			)
			{
				newLogicStateExternalUrl = 8;
			}
			else if (
				((player.getVariableValue('gallery_2') == 10))
			)
			{
				newLogicStateExternalUrl = 9;
			}
			else if (
				((player.getVariableValue('gallery_2') == 11))
			)
			{
				newLogicStateExternalUrl = 10;
			}
			else if (
				((player.getVariableValue('gallery_2') == 12))
			)
			{
				newLogicStateExternalUrl = 11;
			}
			else if (
				((player.getVariableValue('gallery_2') == 13))
			)
			{
				newLogicStateExternalUrl = 12;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._external_2.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._external_2.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._external_2.style[domTransition]='';
				if (me._external_2.ggCurrentLogicStateExternalUrl == 0) {
					me._external_2.ggText=basePath + "gallery/g2_1.jpg";
					me._external_2__img.style.width = '0px';
					me._external_2__img.style.height = '0px';
					me._external_2__img.src=me._external_2.ggText;
				}
				else if (me._external_2.ggCurrentLogicStateExternalUrl == 1) {
					me._external_2.ggText=basePath + "gallery/g2_2.jpg";
					me._external_2__img.style.width = '0px';
					me._external_2__img.style.height = '0px';
					me._external_2__img.src=me._external_2.ggText;
				}
				else if (me._external_2.ggCurrentLogicStateExternalUrl == 2) {
					me._external_2.ggText=basePath + "gallery/g2_3.jpg";
					me._external_2__img.style.width = '0px';
					me._external_2__img.style.height = '0px';
					me._external_2__img.src=me._external_2.ggText;
				}
				else if (me._external_2.ggCurrentLogicStateExternalUrl == 3) {
					me._external_2.ggText=basePath + "gallery/g2_4.png";
					me._external_2__img.style.width = '0px';
					me._external_2__img.style.height = '0px';
					me._external_2__img.src=me._external_2.ggText;
				}
				else if (me._external_2.ggCurrentLogicStateExternalUrl == 4) {
					me._external_2.ggText=basePath + "gallery/g2_5.jpg";
					me._external_2__img.style.width = '0px';
					me._external_2__img.style.height = '0px';
					me._external_2__img.src=me._external_2.ggText;
				}
				else if (me._external_2.ggCurrentLogicStateExternalUrl == 5) {
					me._external_2.ggText=basePath + "gallery/g2_6.png";
					me._external_2__img.style.width = '0px';
					me._external_2__img.style.height = '0px';
					me._external_2__img.src=me._external_2.ggText;
				}
				else if (me._external_2.ggCurrentLogicStateExternalUrl == 6) {
					me._external_2.ggText=basePath + "gallery/g2_7.jpg";
					me._external_2__img.style.width = '0px';
					me._external_2__img.style.height = '0px';
					me._external_2__img.src=me._external_2.ggText;
				}
				else if (me._external_2.ggCurrentLogicStateExternalUrl == 7) {
					me._external_2.ggText=basePath + "gallery/g2_8.png";
					me._external_2__img.style.width = '0px';
					me._external_2__img.style.height = '0px';
					me._external_2__img.src=me._external_2.ggText;
				}
				else if (me._external_2.ggCurrentLogicStateExternalUrl == 8) {
					me._external_2.ggText=basePath + "gallery/g2_9.png";
					me._external_2__img.style.width = '0px';
					me._external_2__img.style.height = '0px';
					me._external_2__img.src=me._external_2.ggText;
				}
				else if (me._external_2.ggCurrentLogicStateExternalUrl == 9) {
					me._external_2.ggText=basePath + "gallery/g2_10.png";
					me._external_2__img.style.width = '0px';
					me._external_2__img.style.height = '0px';
					me._external_2__img.src=me._external_2.ggText;
				}
				else if (me._external_2.ggCurrentLogicStateExternalUrl == 10) {
					me._external_2.ggText=basePath + "gallery/g2_11.jpg";
					me._external_2__img.style.width = '0px';
					me._external_2__img.style.height = '0px';
					me._external_2__img.src=me._external_2.ggText;
				}
				else if (me._external_2.ggCurrentLogicStateExternalUrl == 11) {
					me._external_2.ggText=basePath + "gallery/g2_12.png";
					me._external_2__img.style.width = '0px';
					me._external_2__img.style.height = '0px';
					me._external_2__img.src=me._external_2.ggText;
				}
				else if (me._external_2.ggCurrentLogicStateExternalUrl == 12) {
					me._external_2.ggText=basePath + "gallery/g2_13.png";
					me._external_2__img.style.width = '0px';
					me._external_2__img.style.height = '0px';
					me._external_2__img.src=me._external_2.ggText;
				}
				else {
					me._external_2.ggText=basePath + "";
					me._external_2__img.style.width = '0px';
					me._external_2__img.style.height = '0px';
					me._external_2__img.src=me._external_2.ggText;
				}
			}
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			img.style.width='';
			img.style.height=parentHeight + 'px';
			img.style.left='0px';
			img.style.top='0px';
		}
		me._gallery_background_skeleton.appendChild(me._external_2);
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9JiN4ZDsKCS5zdDF7ZmlsbDojMzMzMzMzO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiB4PSItMC4xIiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNi4xLDIyLjUiLz4KIDxwb2x5bGluZSBwb2ludHM9IjMxLjksMjIuNSAxNSwzOS40IDEzLjEsMzcuNSAyOC4xLDIyLjUgMTMuMSw3LjUgMTUsNS42IDMxLjksMjIu'+
			'NSAiLz4KPC9zdmc+Cg==';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzUyODMwRTtzdHJva2U6IzUyODMwRTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9JiN4ZDsKCS5zdDF7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MntmaWxsOiNGRUZGRkQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iNDUiIHg9Ii0wLjEiIGhlaWdodD0iNDUiLz4KIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTM2LjEsMjIuNSIvPgogPHBvbHlsaW5lIGNsYXNzPSJzdDIiIHBvaW50cz0iMzEuOSwyMi41IDE1LDM5LjQgMTMuMSwz'+
			'Ny41IDI4LjEsMjIuNSAxMy4xLDcuNSAxNSw1LjYgMzEuOSwyMi41ICIvPgo8L3N2Zz4K';
		me._svg_4__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 9.3361%;';
		hs+='position : absolute;';
		hs+='right : 1.90476%;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 4.7619%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_2') <= 12))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_4.style[domTransition]='';
				if (me._svg_4.ggCurrentLogicStateVisible == 0) {
					me._svg_4.style.visibility=(Number(me._svg_4.style.opacity)>0||!me._svg_4.style.opacity)?'inherit':'hidden';
					me._svg_4.ggVisible=true;
				}
				else {
					me._svg_4.style.visibility="hidden";
					me._svg_4.ggVisible=false;
				}
			}
		}
		me._svg_4.onclick=function (e) {
			player.setVariableValue('gallery_2', player.getVariableValue('gallery_2') + Number("1"));
		}
		me._svg_4.onmouseover=function (e) {
			me._svg_4__img.style.visibility='hidden';
			me._svg_4__imgo.style.visibility='inherit';
		}
		me._svg_4.onmouseout=function (e) {
			me._svg_4__img.style.visibility='inherit';
			me._svg_4__imgo.style.visibility='hidden';
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._gallery_background_skeleton.appendChild(me._svg_4);
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9JiN4ZDsKCS5zdDF7ZmlsbDojMzMzMzMzO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiB4PSItMC4xIiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNi4xLDIyLjUiLz4KIDxwb2x5bGluZSBwb2ludHM9IjEzLjEsMjIuNSAzMCw1LjYgMzEuOSw3LjUgMTYuOSwyMi41IDMxLjksMzcuNSAzMCwzOS40IDEzLjEsMjIu'+
			'NSAiLz4KPC9zdmc+Cg==';
		me._svg_5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzUyODMwRTtzdHJva2U6IzUyODMwRTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9JiN4ZDsKCS5zdDF7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MntmaWxsOiNGRUZGRkQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iNDUiIHg9Ii0wLjEiIGhlaWdodD0iNDUiLz4KIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTM2LjEsMjIuNSIvPgogPHBvbHlsaW5lIGNsYXNzPSJzdDIiIHBvaW50cz0iMTMuMSwyMi41IDMwLDUuNiAzMS45LDcu'+
			'NSAxNi45LDIyLjUgMzEuOSwzNy41IDMwLDM5LjQgMTMuMSwyMi41ICIvPgo8L3N2Zz4K';
		me._svg_5__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 9.3361%;';
		hs+='left : 1.90476%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 4.7619%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_2') >= 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_5.style[domTransition]='';
				if (me._svg_5.ggCurrentLogicStateVisible == 0) {
					me._svg_5.style.visibility=(Number(me._svg_5.style.opacity)>0||!me._svg_5.style.opacity)?'inherit':'hidden';
					me._svg_5.ggVisible=true;
				}
				else {
					me._svg_5.style.visibility="hidden";
					me._svg_5.ggVisible=false;
				}
			}
		}
		me._svg_5.onclick=function (e) {
			player.setVariableValue('gallery_2', player.getVariableValue('gallery_2') - Number("1"));
		}
		me._svg_5.onmouseover=function (e) {
			me._svg_5__img.style.visibility='hidden';
			me._svg_5__imgo.style.visibility='inherit';
		}
		me._svg_5.onmouseout=function (e) {
			me._svg_5__img.style.visibility='inherit';
			me._svg_5__imgo.style.visibility='hidden';
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._gallery_background_skeleton.appendChild(me._svg_5);
		me._rectangle_5_2.appendChild(me._gallery_background_skeleton);
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs=basePath + 'images/image_8.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0%;';
		hs+='height : 21.4506%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_5_2.appendChild(me._image_8);
		me._container_frame_1.appendChild(me._rectangle_5_2);
		me._iframe_skeleton.appendChild(me._container_frame_1);
		me.divSkin.appendChild(me._iframe_skeleton);
		el=me._hinde_videos=document.createElement('div');
		el.ggId="hinde_videos";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 219px;';
		hs+='position : absolute;';
		hs+='top : 175px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hinde_videos.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hinde_videos.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._hinde_videos);
		el=me._instructions=document.createElement('div');
		els=me._instructions__img=document.createElement('img');
		els.className='ggskin ggskin_instructions';
		hs=basePath + 'images/instructions.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="instructions";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : calc(60vw*0.5625);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 60vw;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._instructions.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._instructions.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._svg_2_3_1_1=document.createElement('div');
		els=me._svg_2_3_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTt9JiN4ZDsKCS5zdDF7ZmlsbDojMDAwMDAwO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_3_1_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2_3_1_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojNTI4MzBFO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_3_1_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2_3_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 9%;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 5.06757%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2_3_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_3_1_1.onclick=function (e) {
			player.setVariableValue('vis_active_skin', true);
			me._instructions.style[domTransition]='none';
			me._instructions.style.visibility='hidden';
			me._instructions.ggVisible=false;
		}
		me._svg_2_3_1_1.onmouseover=function (e) {
			me._svg_2_3_1_1__img.style.visibility='hidden';
			me._svg_2_3_1_1__imgo.style.visibility='inherit';
		}
		me._svg_2_3_1_1.onmouseout=function (e) {
			me._svg_2_3_1_1__img.style.visibility='inherit';
			me._svg_2_3_1_1__imgo.style.visibility='hidden';
		}
		me._svg_2_3_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._instructions.appendChild(me._svg_2_3_1_1);
		me.divSkin.appendChild(me._instructions);
		el=me._intro=document.createElement('div');
		els=me._intro__img=document.createElement('img');
		els.className='ggskin ggskin_intro';
		hs=basePath + 'images/intro.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="INTRO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100vh;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100vh*0.6711);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._intro.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._intro.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('start') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._intro.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._intro.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._intro.style[domTransition]='left 1500ms ease 0ms, top 1500ms ease 0ms';
				if (me._intro.ggCurrentLogicStatePosition == 0) {
					me._intro.style.left='-1000px';
					this.ggDy = 0;
					me._intro.ggUpdatePosition(true);
				}
				else {
					me._intro.style.left='0px';
					me._intro.ggDy=0;
					me._intro.ggUpdatePosition(true);
				}
			}
		}
		me._intro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._start_button=document.createElement('div');
		els=me._start_button__img=document.createElement('img');
		els.className='ggskin ggskin_start_button';
		hs=basePath + 'images/start_button.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/start_button__o.png';
		me._start_button__img.ggOverSrc=hs;
		el.ggId="Start_Button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 16.67%;';
		hs+='cursor : pointer;';
		hs+='height : 6.25%;';
		hs+='left : 7.25%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 42.6501%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_button.onclick=function (e) {
			player.setVariableValue('start', false);
			player.setVariableValue('vis_active_skin', true);
			me._background.style[domTransition]='none';
			me._background.style.visibility=(Number(me._background.style.opacity)>0||!me._background.style.opacity)?'inherit':'hidden';
			me._background.ggVisible=true;
			player.moveTo("-32.9","0.35","52","3.0000");
			gtag('event', 'Start Button Clicked', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': 'Start_Button'
});
		}
		me._start_button.onmouseover=function (e) {
			me._start_button__img.src=me._start_button__img.ggOverSrc;
		}
		me._start_button.onmouseout=function (e) {
			me._start_button__img.src=me._start_button__img.ggNormalSrc;
		}
		me._start_button.ggUpdatePosition=function (useTransition) {
		}
		me._intro.appendChild(me._start_button);
		me.divSkin.appendChild(me._intro);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=0;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 550px;';
		hs+='position : absolute;';
		hs+='top : 583px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp + me._timer_1.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style[domTransition]='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._navigation_bar.style[domTransition]='none';
			} else {
				me._navigation_bar.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._navigation_bar.style.opacity='0';
			me._navigation_bar.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._mount_title.style[domTransition]='none';
			} else {
				me._mount_title.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._mount_title.style.opacity='0';
			me._mount_title.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._cover_menu.style[domTransition]='none';
			} else {
				me._cover_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._cover_menu.style.opacity='0';
			me._cover_menu.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._return_button.style[domTransition]='none';
			} else {
				me._return_button.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._return_button.style.opacity='1';
			me._return_button.style.visibility=me._return_button.ggVisible?'inherit':'hidden';
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._timer_ht_pulse=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=750;
		el.ggId="timer_ht_pulse";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 280px;';
		hs+='position : absolute;';
		hs+='top : 389px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_ht_pulse.ggIsActive=function() {
			return (me._timer_ht_pulse.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_ht_pulse.ggTimestamp) / me._timer_ht_pulse.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_ht_pulse.ggActivate=function () {
			player.setVariableValue('ht_pulse', true);
		}
		me._timer_ht_pulse.ggDeactivate=function () {
			player.setVariableValue('ht_pulse', false);
		}
		me._timer_ht_pulse.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_ht_pulse);
		el=me._iframe_url=document.createElement('div');
		el.ggId="iframe_url";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._iframe_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._iframe_url.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width >= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._iframe_url.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._iframe_url.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._iframe_url.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_url.ggCurrentLogicStateScaling == 0) {
					me._iframe_url.ggParameter.sx = 0.8;
					me._iframe_url.ggParameter.sy = 0.8;
					me._iframe_url.style[domTransform]=parameterToTransform(me._iframe_url.ggParameter);
				}
				else if (me._iframe_url.ggCurrentLogicStateScaling == 1) {
					me._iframe_url.ggParameter.sx = 1.4;
					me._iframe_url.ggParameter.sy = 1.4;
					me._iframe_url.style[domTransform]=parameterToTransform(me._iframe_url.ggParameter);
				}
				else {
					me._iframe_url.ggParameter.sx = 1;
					me._iframe_url.ggParameter.sy = 1;
					me._iframe_url.style[domTransform]=parameterToTransform(me._iframe_url.ggParameter);
				}
			}
		}
		me._iframe_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('url_iframe') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._iframe_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._iframe_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._iframe_url.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._iframe_url.ggCurrentLogicStateVisible == 0) {
					me._iframe_url.style.visibility=(Number(me._iframe_url.style.opacity)>0||!me._iframe_url.style.opacity)?'inherit':'hidden';
					me._iframe_url.ggVisible=true;
				}
				else {
					me._iframe_url.style.visibility="hidden";
					me._iframe_url.ggVisible=false;
				}
			}
		}
		me._iframe_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_frame_video=document.createElement('div');
		el.ggId="Container frame_video";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(70vw*0.5625);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 70vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_frame_video.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_frame_video.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._left_1=document.createElement('div');
		el.ggId="left_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_video.appendChild(me._left_1);
		el=me._right_1=document.createElement('div');
		el.ggId="right_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._right_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_frame_video.appendChild(me._right_1);
		el=me._bottom_1=document.createElement('div');
		el.ggId="bottom_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bottom_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bottom_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_frame_video.appendChild(me._bottom_1);
		el=me._top_1=document.createElement('div');
		el.ggId="top_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #52830e;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._top_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._top_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_video.appendChild(me._top_1);
		el=me._svg_2_5=document.createElement('div');
		els=me._svg_2_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2_5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojNTI4MzBFO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_5__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2_5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6.52174%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 4.6875%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_5.onclick=function (e) {
			me._url_iframe.ggText="";
			me._url_iframe.ggTextDiv.innerHTML=me._url_iframe.ggText;
			if (me._url_iframe.ggUpdateText) {
				me._url_iframe.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._url_iframe.ggUpdatePosition) {
				me._url_iframe.ggUpdatePosition();
			}
			me._url_iframe.ggTextDiv.scrollTop = 0;
			player.setVariableValue('url_iframe', false);
			player.setVariableValue('vis_active_skin', true);
		}
		me._svg_2_5.onmouseover=function (e) {
			me._svg_2_5__img.style.visibility='hidden';
			me._svg_2_5__imgo.style.visibility='inherit';
		}
		me._svg_2_5.onmouseout=function (e) {
			me._svg_2_5__img.style.visibility='inherit';
			me._svg_2_5__imgo.style.visibility='hidden';
		}
		me._svg_2_5.ggUpdatePosition=function (useTransition) {
		}
		me._container_frame_video.appendChild(me._svg_2_5);
		el=me._rectangle_6_1=document.createElement('div');
		el.ggId="Rectangle 6_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100%  -  100px);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100%  -  100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_6_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._url_iframe=document.createElement('div');
		els=me._url_iframe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_iframe";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._url_iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_iframe.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_6_1.appendChild(me._url_iframe);
		me._container_frame_video.appendChild(me._rectangle_6_1);
		me._iframe_url.appendChild(me._container_frame_video);
		me.divSkin.appendChild(me._iframe_url);
		el=me._init_ga=document.createElement('div');
		els=me._init_ga__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="init_ga";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Please set your Google tracking ID";
var ua_id=player.getVariableValue('UA_ID');
if (!window.dataLayer) {
  window.dataLayer = [];
  let script = document.createElement('script');
  script.async=1;
  script.src = 'https://www.googletagmanager.com/gtag/js?id='+ua_id;
  document.head.appendChild(script);
}
function gtag() { window.dataLayer.push(arguments);}
window.gtag=gtag;
gtag('js', new Date());
gtag('config', ua_id);
		el.appendChild(els);
		me._init_ga.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._init_ga.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UA_ID') == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UA_category') == ""))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._init_ga.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._init_ga.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._init_ga.style[domTransition]='';
				if (me._init_ga.ggCurrentLogicStateVisible == 0) {
					me._init_ga.style.visibility=(Number(me._init_ga.style.opacity)>0||!me._init_ga.style.opacity)?'inherit':'hidden';
					me._init_ga.ggVisible=true;
				}
				else if (me._init_ga.ggCurrentLogicStateVisible == 1) {
					me._init_ga.style.visibility="hidden";
					me._init_ga.ggVisible=false;
				}
				else {
					me._init_ga.style.visibility="hidden";
					me._init_ga.ggVisible=false;
				}
			}
		}
		me._init_ga.ggUpdatePosition=function (useTransition) {
		}
		me._init_ga.ggNodeChange=function () {
			gtag('event', 'Node Change', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': player.userdata.title
});
		}
		me.divSkin.appendChild(me._init_ga);
		el=me._welcome_mount=document.createElement('div');
		els=me._welcome_mount__img=document.createElement('img');
		els.className='ggskin ggskin_welcome_mount';
		hs=basePath + 'images/welcome_mount.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="welcome_mount";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : calc(90vw*0.2810);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90vw;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._welcome_mount.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._welcome_mount.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('welcome_msg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._welcome_mount.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._welcome_mount.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._welcome_mount.style[domTransition]='';
				if (me._welcome_mount.ggCurrentLogicStateVisible == 0) {
					me._welcome_mount.style.visibility=(Number(me._welcome_mount.style.opacity)>0||!me._welcome_mount.style.opacity)?'inherit':'hidden';
					me._welcome_mount.ggVisible=true;
				}
				else {
					me._welcome_mount.style.visibility="hidden";
					me._welcome_mount.ggVisible=false;
				}
			}
		}
		me._welcome_mount.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._svg_2_5_1=document.createElement('div');
		els=me._svg_2_5_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_5_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2_5_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojNTI4MzBFO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_5_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2_5_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 13.9319%;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : -13.9319%;';
		hs+='visibility : inherit;';
		hs+='width : 3.91304%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2_5_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_5_1.onclick=function (e) {
			player.setVariableValue('vis_active_skin', true);
			player.setVariableValue('welcome_msg', false);
		}
		me._svg_2_5_1.onmouseover=function (e) {
			me._svg_2_5_1__img.style.visibility='hidden';
			me._svg_2_5_1__imgo.style.visibility='inherit';
		}
		me._svg_2_5_1.onmouseout=function (e) {
			me._svg_2_5_1__img.style.visibility='inherit';
			me._svg_2_5_1__imgo.style.visibility='hidden';
		}
		me._svg_2_5_1.ggUpdatePosition=function (useTransition) {
		}
		me._welcome_mount.appendChild(me._svg_2_5_1);
		me.divSkin.appendChild(me._welcome_mount);
		el=me._donors_mount=document.createElement('div');
		els=me._donors_mount__img=document.createElement('img');
		els.className='ggskin ggskin_donors_mount';
		hs=basePath + 'images/donors_mount.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="donors_mount";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : calc(65vw*0.4609);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 65vw;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._donors_mount.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._donors_mount.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('donors_msg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._donors_mount.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._donors_mount.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._donors_mount.style[domTransition]='';
				if (me._donors_mount.ggCurrentLogicStateVisible == 0) {
					me._donors_mount.style.visibility=(Number(me._donors_mount.style.opacity)>0||!me._donors_mount.style.opacity)?'inherit':'hidden';
					me._donors_mount.ggVisible=true;
				}
				else {
					me._donors_mount.style.visibility="hidden";
					me._donors_mount.ggVisible=false;
				}
			}
		}
		me._donors_mount.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._svg_2_6=document.createElement('div');
		els=me._svg_2_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2_6__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ1IDQ1IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MDt9JiN4ZDsKCS5zdDF7ZmlsbDojNTI4MzBFO30mI3hkOwo8L3N0eWxlPgogPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ii8+CiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KIDxnPgogIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzMuNywzNS4xIDIyLjUsMjMuOSAxMS4zLDM1LjEgOS45LDMzLjcgMjEuMSwyMi41IDkuOSwxMS4zIDExLjMsOS45IDIyLjUsMjEuMSAzMy43LDkuOSAzNS4xLDExLjMgJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsyMy45LDIyLjUgMzUuMSwzMy43ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_6__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2_6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 7.5%;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : -7.4984%;';
		hs+='visibility : inherit;';
		hs+='width : 4.1744%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_6.onclick=function (e) {
			player.setVariableValue('vis_active_skin', true);
			player.setVariableValue('donors_msg', false);
		}
		me._svg_2_6.onmouseover=function (e) {
			me._svg_2_6__img.style.visibility='hidden';
			me._svg_2_6__imgo.style.visibility='inherit';
		}
		me._svg_2_6.onmouseout=function (e) {
			me._svg_2_6__img.style.visibility='inherit';
			me._svg_2_6__imgo.style.visibility='hidden';
		}
		me._svg_2_6.ggUpdatePosition=function (useTransition) {
		}
		me._donors_mount.appendChild(me._svg_2_6);
		me.divSkin.appendChild(me._donors_mount);
		el=me._mobile_view=document.createElement('div');
		el.ggId="Mobile_View";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_view.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mobile_view.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width / player.getViewerSize().height < 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile_view.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile_view.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile_view.style[domTransition]='';
				if (me._mobile_view.ggCurrentLogicStateVisible == 0) {
					me._mobile_view.style.visibility=(Number(me._mobile_view.style.opacity)>0||!me._mobile_view.style.opacity)?'inherit':'hidden';
					me._mobile_view.ggVisible=true;
				}
				else {
					me._mobile_view.style.visibility="hidden";
					me._mobile_view.ggVisible=false;
				}
			}
		}
		me._mobile_view.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : calc(50vw*0.8965);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50vw;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_1.appendChild(me._image_4);
		me._mobile_view.appendChild(me._rectangle_1);
		me.divSkin.appendChild(me._mobile_view);
		me._video_vimeo.ggVideoSource = 'https://player.vimeo.com/external/540384228.hd.mp4?s=29a8890d47d029287eadcbebc0e1a2a16641deb8&profile_id=175';
		me._video_vimeo.ggVideoNotLoaded = true;
		me._video_vimeo_luis.ggVideoSource = '536908474';
		me._video_vimeo_luis.ggVideoNotLoaded = true;
		me._video_vimeo_erika.ggVideoSource = '536908733';
		me._video_vimeo_erika.ggVideoNotLoaded = true;
		me._video_vimeo_tony.ggVideoSource = '536908399';
		me._video_vimeo_tony.ggVideoNotLoaded = true;
		me._video_vimeo_arrival.ggVideoSource = 'https://player.vimeo.com/external/541856246.hd.mp4?s=a395ee393a3528ff6cb4eb5a32d07561983edbff&profile_id=175';
		me._video_vimeo_arrival.ggVideoNotLoaded = true;
		me._video_youtube_library.ggVideoSource = 'https://player.vimeo.com/external/542853564.hd.mp4?s=81b664999bdf54f2d5cf31ed738fb3f7ae3af41a&profile_id=175';
		me._video_youtube_library.ggVideoNotLoaded = true;
		me._video_vimeo.ggInitMedia('');
		me._video_vimeo.style[domTransition]='none';
		me._video_vimeo.style.visibility='hidden';
		me._video_vimeo.ggVisible=false;
		me._video_vimeo_arrival.ggInitMedia('');
		me._video_vimeo_arrival.style[domTransition]='none';
		me._video_vimeo_arrival.style.visibility='hidden';
		me._video_vimeo_arrival.ggVisible=false;
		me._video_vimeo_erika.ggInitMedia('');
		me._video_vimeo_erika.style[domTransition]='none';
		me._video_vimeo_erika.style.visibility='hidden';
		me._video_vimeo_erika.ggVisible=false;
		me._video_vimeo_tony.ggInitMedia('');
		me._video_vimeo_tony.style[domTransition]='none';
		me._video_vimeo_tony.style.visibility='hidden';
		me._video_vimeo_tony.ggVisible=false;
		me._video_vimeo_luis.ggInitMedia('');
		me._video_vimeo_luis.style[domTransition]='none';
		me._video_vimeo_luis.style.visibility='hidden';
		me._video_vimeo_luis.ggVisible=false;
		me._video_youtube_library.ggInitMedia('');
		me._video_youtube_library.style[domTransition]='none';
		me._video_youtube_library.style.visibility='hidden';
		me._video_youtube_library.ggVisible=false;
		this.preloadImages();
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_nodechange_changenode = function(){
		if(hotspotTemplates['ht_nodechange']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodechange'].length; i++) {
				if (hotspotTemplates['ht_nodechange'][i]._ht_nodechange.logicBlock_visible) {
					hotspotTemplates['ht_nodechange'][i]._ht_nodechange.logicBlock_visible();
				}
				if (hotspotTemplates['ht_nodechange'][i]._ht_nodechange_emplycircle && hotspotTemplates['ht_nodechange'][i]._ht_nodechange_emplycircle.logicBlock_scaling) {
					hotspotTemplates['ht_nodechange'][i]._ht_nodechange_emplycircle.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodechange_mouseover = function(){
		if(hotspotTemplates['ht_nodechange']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodechange'].length; i++) {
				if (hotspotTemplates['ht_nodechange'][i]._ht_text_node && hotspotTemplates['ht_nodechange'][i]._ht_text_node.logicBlock_alpha) {
					hotspotTemplates['ht_nodechange'][i]._ht_text_node.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodechange_varchanged_vis_active_skin = function(){
		if(hotspotTemplates['ht_nodechange']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodechange'].length; i++) {
				if (hotspotTemplates['ht_nodechange'][i]._ht_nodechange.logicBlock_visible) {
					hotspotTemplates['ht_nodechange'][i]._ht_nodechange.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodechange_varchanged_ht_pulse = function(){
		if(hotspotTemplates['ht_nodechange']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodechange'].length; i++) {
				if (hotspotTemplates['ht_nodechange'][i]._ht_nodechange_emplycircle && hotspotTemplates['ht_nodechange'][i]._ht_nodechange_emplycircle.logicBlock_scaling) {
					hotspotTemplates['ht_nodechange'][i]._ht_nodechange_emplycircle.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_link_changenode = function(){
		if(hotspotTemplates['ht_URL_link']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_URL_link'].length; i++) {
				if (hotspotTemplates['ht_URL_link'][i]._ht_url_link.logicBlock_visible) {
					hotspotTemplates['ht_URL_link'][i]._ht_url_link.logicBlock_visible();
				}
				if (hotspotTemplates['ht_URL_link'][i]._ht_url_emptycircle_1 && hotspotTemplates['ht_URL_link'][i]._ht_url_emptycircle_1.logicBlock_scaling) {
					hotspotTemplates['ht_URL_link'][i]._ht_url_emptycircle_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_link_mouseover = function(){
		if(hotspotTemplates['ht_URL_link']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_URL_link'].length; i++) {
				if (hotspotTemplates['ht_URL_link'][i]._ht_text_url && hotspotTemplates['ht_URL_link'][i]._ht_text_url.logicBlock_alpha) {
					hotspotTemplates['ht_URL_link'][i]._ht_text_url.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_link_varchanged_vis_active_skin = function(){
		if(hotspotTemplates['ht_URL_link']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_URL_link'].length; i++) {
				if (hotspotTemplates['ht_URL_link'][i]._ht_url_link.logicBlock_visible) {
					hotspotTemplates['ht_URL_link'][i]._ht_url_link.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_link_varchanged_ht_pulse = function(){
		if(hotspotTemplates['ht_URL_link']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_URL_link'].length; i++) {
				if (hotspotTemplates['ht_URL_link'][i]._ht_url_emptycircle_1 && hotspotTemplates['ht_URL_link'][i]._ht_url_emptycircle_1.logicBlock_scaling) {
					hotspotTemplates['ht_URL_link'][i]._ht_url_emptycircle_1.logicBlock_scaling();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
			} else {
				if (player.transitionsDisabled) {
					me._navigation_bar.style[domTransition]='none';
				} else {
					me._navigation_bar.style[domTransition]='all 1000ms ease-out 0ms';
				}
				me._navigation_bar.style.opacity='0';
				me._navigation_bar.style.visibility='hidden';
				if (player.transitionsDisabled) {
					me._mount_title.style[domTransition]='none';
				} else {
					me._mount_title.style[domTransition]='all 1000ms ease-out 0ms';
				}
				me._mount_title.style.opacity='0';
				me._mount_title.style.visibility='hidden';
				if (player.transitionsDisabled) {
					me._cover_menu.style[domTransition]='none';
				} else {
					me._cover_menu.style[domTransition]='all 1000ms ease-out 0ms';
				}
				me._cover_menu.style.opacity='0';
				me._cover_menu.style.visibility='hidden';
				if (player.transitionsDisabled) {
					me._return_button.style[domTransition]='none';
				} else {
					me._return_button.style[domTransition]='all 1000ms ease-out 0ms';
				}
				me._return_button.style.opacity='1';
				me._return_button.style.visibility=me._return_button.ggVisible?'inherit':'hidden';
			}
		}
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_ht_pulse.ggLastIsActive!=me._timer_ht_pulse.ggIsActive()) {
			me._timer_ht_pulse.ggLastIsActive=me._timer_ht_pulse.ggIsActive();
			if (me._timer_ht_pulse.ggLastIsActive) {
				player.setVariableValue('ht_pulse', true);
			} else {
				player.setVariableValue('ht_pulse', false);
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_nodechange(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_nodechange=document.createElement('div');
		el.ggId="ht_nodechange";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_nodechange.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_nodechange.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_active_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_nodechange.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_nodechange.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_nodechange.style[domTransition]='';
				if (me._ht_nodechange.ggCurrentLogicStateVisible == 0) {
					me._ht_nodechange.style.visibility=(Number(me._ht_nodechange.style.opacity)>0||!me._ht_nodechange.style.opacity)?'inherit':'hidden';
					me._ht_nodechange.ggVisible=true;
				}
				else {
					me._ht_nodechange.style.visibility="hidden";
					me._ht_nodechange.ggVisible=false;
				}
			}
		}
		me._ht_nodechange.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			player.setVariableValue('img_nodechange', false);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodechange.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodechange.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			player.setVariableValue('img_nodechange', true);
			me.elementMouseOver['ht_nodechange']=true;
			me._ht_text_node.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodechange.onmouseout=function (e) {
			player.setActiveHotspot(null);
			player.setVariableValue('img_nodechange', false);
			me.elementMouseOver['ht_nodechange']=false;
			me._ht_text_node.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodechange.ontouchend=function (e) {
			me.elementMouseOver['ht_nodechange']=false;
			me._ht_text_node.logicBlock_alpha();
		}
		me._ht_nodechange.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_nodechange_fullcircle=document.createElement('div');
		el.ggId="ht_nodechange_fullcircle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_nodechange_fullcircle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_nodechange_fullcircle.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_nodechange_emplycircle=document.createElement('div');
		el.ggId="ht_nodechange_emplycircle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 4px solid rgba(255,255,255,0.666667);';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_nodechange_emplycircle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_nodechange_emplycircle.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_pulse') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_nodechange_emplycircle.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_nodechange_emplycircle.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_nodechange_emplycircle.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._ht_nodechange_emplycircle.ggCurrentLogicStateScaling == 0) {
					me._ht_nodechange_emplycircle.ggParameter.sx = 1;
					me._ht_nodechange_emplycircle.ggParameter.sy = 1;
					me._ht_nodechange_emplycircle.style[domTransform]=parameterToTransform(me._ht_nodechange_emplycircle.ggParameter);
				}
				else {
					me._ht_nodechange_emplycircle.ggParameter.sx = 0.3;
					me._ht_nodechange_emplycircle.ggParameter.sy = 0.3;
					me._ht_nodechange_emplycircle.style[domTransform]=parameterToTransform(me._ht_nodechange_emplycircle.ggParameter);
				}
			}
		}
		me._ht_nodechange_emplycircle.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_nodechange_fullcircle.appendChild(me._ht_nodechange_emplycircle);
		me._ht_nodechange.appendChild(me._ht_nodechange_fullcircle);
		el=me._ht_text_node=document.createElement('div');
		els=me._ht_text_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_text_node";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #52830e;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._ht_text_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_text_node.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_nodechange'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_text_node.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_text_node.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_text_node.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_text_node.ggCurrentLogicStateAlpha == 0) {
					me._ht_text_node.style.visibility=me._ht_text_node.ggVisible?'inherit':'hidden';
					me._ht_text_node.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_text_node.style.opacity == 0.0) { me._ht_text_node.style.visibility="hidden"; } }, 505);
					me._ht_text_node.style.opacity=0;
				}
			}
		}
		me._ht_text_node.onclick=function (e) {
			player.openNext("","");
		}
		me._ht_text_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_nodechange.appendChild(me._ht_text_node);
		me.__div = me._ht_nodechange;
	};
	function SkinHotspotClass_ht_url_link(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url_link=document.createElement('div');
		el.ggId="ht_URL_link";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 366px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_link.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url_link.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_active_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_link.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_link.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_link.style[domTransition]='';
				if (me._ht_url_link.ggCurrentLogicStateVisible == 0) {
					me._ht_url_link.style.visibility=(Number(me._ht_url_link.style.opacity)>0||!me._ht_url_link.style.opacity)?'inherit':'hidden';
					me._ht_url_link.ggVisible=true;
				}
				else {
					me._ht_url_link.style.visibility="hidden";
					me._ht_url_link.ggVisible=false;
				}
			}
		}
		me._ht_url_link.onclick=function (e) {
			if (
				(
					((me.hotspot.description == "welcome"))
				)
			) {
				player.setVariableValue('welcome_msg', true);
			}
			player.setVariableValue('vis_active_skin', false);
			gtag('event', 'Url Hotspot Clicked', {
  'event_category': player.getVariableValue('UA_category'),
  'event_label': player.hotspot.id
});
			if (
				(
					((me.hotspot.description == "donors"))
				)
			) {
				player.setVariableValue('donors_msg', true);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_link.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_link.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url_link']=true;
			me._ht_text_url.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_link.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url_link']=false;
			me._ht_text_url.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_link.ontouchend=function (e) {
			me.elementMouseOver['ht_url_link']=false;
			me._ht_text_url.logicBlock_alpha();
		}
		me._ht_url_link.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_fullcircle_1=document.createElement('div');
		el.ggId="ht_url_fullcircle_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_fullcircle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_fullcircle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_url_emptycircle_1=document.createElement('div');
		el.ggId="ht_url_emptycircle_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 4px solid rgba(255,255,255,0.666667);';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_url_emptycircle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_emptycircle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_pulse') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_url_emptycircle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_url_emptycircle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_url_emptycircle_1.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._ht_url_emptycircle_1.ggCurrentLogicStateScaling == 0) {
					me._ht_url_emptycircle_1.ggParameter.sx = 1;
					me._ht_url_emptycircle_1.ggParameter.sy = 1;
					me._ht_url_emptycircle_1.style[domTransform]=parameterToTransform(me._ht_url_emptycircle_1.ggParameter);
				}
				else {
					me._ht_url_emptycircle_1.ggParameter.sx = 0.3;
					me._ht_url_emptycircle_1.ggParameter.sy = 0.3;
					me._ht_url_emptycircle_1.style[domTransform]=parameterToTransform(me._ht_url_emptycircle_1.ggParameter);
				}
			}
		}
		me._ht_url_emptycircle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_url_fullcircle_1.appendChild(me._ht_url_emptycircle_1);
		me._ht_url_link.appendChild(me._ht_url_fullcircle_1);
		el=me._ht_text_url=document.createElement('div');
		els=me._ht_text_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_text_url";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #52830e;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._ht_text_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_text_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_url_link'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_text_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_text_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_text_url.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_text_url.ggCurrentLogicStateAlpha == 0) {
					me._ht_text_url.style.visibility=me._ht_text_url.ggVisible?'inherit':'hidden';
					me._ht_text_url.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_text_url.style.opacity == 0.0) { me._ht_text_url.style.visibility="hidden"; } }, 505);
					me._ht_text_url.style.opacity=0;
				}
			}
		}
		me._ht_text_url.onclick=function (e) {
			player.openNext("","");
		}
		me._ht_text_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_url_link.appendChild(me._ht_text_url);
		me.__div = me._ht_url_link;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_nodechange') {
			hotspot.skinid = 'ht_nodechange';
			hsinst = new SkinHotspotClass_ht_nodechange(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_nodechange_changenode();;
			me.callChildLogicBlocksHotspot_ht_nodechange_mouseover();;
			me.callChildLogicBlocksHotspot_ht_nodechange_varchanged_vis_active_skin();;
			me.callChildLogicBlocksHotspot_ht_nodechange_varchanged_ht_pulse();;
		} else
		{
			hotspot.skinid = 'ht_URL_link';
			hsinst = new SkinHotspotClass_ht_url_link(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_link_changenode();;
			me.callChildLogicBlocksHotspot_ht_url_link_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url_link_varchanged_vis_active_skin();;
			me.callChildLogicBlocksHotspot_ht_url_link_varchanged_ht_pulse();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_nodechange']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodechange'].length; i++) {
				hotspotTemplates['ht_nodechange'][i] = null;
			}
		}
		if(hotspotTemplates['ht_URL_link']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_URL_link'].length; i++) {
				hotspotTemplates['ht_URL_link'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;} @font-face { font-family: KievitOT-Book; src: url(KievitOT-Book.ttf); } .info_body{ font-family: KievitOT-Book; font-size: 15px; }'));
	document.head.appendChild(style);
	me._menu.logicBlock_position();
	me._menu.logicBlock_scaling();
	me._tt_info.logicBlock_text();
	me._tt_fullscreen.logicBlock_text();
	me._tt_fullscreen2.logicBlock_position();
	me._tt_fullscreen2.logicBlock_text();
	me._navigation_bar.logicBlock_position();
	me._navigation_bar.logicBlock_scaling();
	me._tt_dig.logicBlock_text();
	me._tt_lab.logicBlock_text();
	me._tt_institute.logicBlock_text();
	me._tt_mount.logicBlock_text();
	me._dig_title.logicBlock_position();
	me._dig_title.logicBlock_scaling();
	me._title_dig.logicBlock_text();
	me._lab_title.logicBlock_position();
	me._lab_title.logicBlock_scaling();
	me._title_lab.logicBlock_text();
	me._institute_title.logicBlock_position();
	me._institute_title.logicBlock_scaling();
	me._title_institute.logicBlock_text();
	me._mount_title.logicBlock_position();
	me._mount_title.logicBlock_scaling();
	me._title_mount.logicBlock_text();
	me._line_menu_dig.logicBlock_position();
	me._line_menu_dig.logicBlock_scaling();
	me._line_menu_lab.logicBlock_position();
	me._line_menu_lab.logicBlock_scaling();
	me._line_menu_institute.logicBlock_position();
	me._line_menu_institute.logicBlock_scaling();
	me._iframe_fg.logicBlock_scaling();
	me._iframe_quarry.logicBlock_scaling();
	me._iframe_crew.logicBlock_scaling();
	me._iframe_arrival.logicBlock_scaling();
	me._iframe_green.logicBlock_scaling();
	me._iframe_library.logicBlock_scaling();
	me._iframe_skeleton.logicBlock_scaling();
	me._iframe_url.logicBlock_scaling();
	me._mobile_view.logicBlock_visible();
	me._fullscreen.logicBlock_visible();
	me._exit_fullscreen.logicBlock_visible();
	me._active_skin.logicBlock_visible();
	me._dig_title.logicBlock_alpha();
	me._lab_title.logicBlock_alpha();
	me._institute_title.logicBlock_alpha();
	me._mount_title.logicBlock_alpha();
	me._line_menu_dig.logicBlock_alpha();
	me._line_menu_lab.logicBlock_alpha();
	me._line_menu_institute.logicBlock_alpha();
	me._iframe_fg.logicBlock_visible();
	me._iframe_quarry.logicBlock_visible();
	me._iframe_crew.logicBlock_visible();
	me._external_3.logicBlock_externalurl();
	me._svg_4_1.logicBlock_visible();
	me._svg_5_1.logicBlock_visible();
	me._iframe_arrival.logicBlock_visible();
	me._iframe_green.logicBlock_visible();
	me._external_4.logicBlock_externalurl();
	me._svg_4_2.logicBlock_visible();
	me._svg_4_3.logicBlock_visible();
	me._iframe_library.logicBlock_visible();
	me._iframe_skeleton.logicBlock_visible();
	me._external_2.logicBlock_externalurl();
	me._svg_4.logicBlock_visible();
	me._svg_5.logicBlock_visible();
	me._intro.logicBlock_position();
	me._iframe_url.logicBlock_visible();
	me._init_ga.logicBlock_visible();
	me._welcome_mount.logicBlock_visible();
	me._donors_mount.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._menu.logicBlock_position();me._menu.logicBlock_scaling();me._tt_info.logicBlock_text();me._tt_fullscreen.logicBlock_text();me._tt_fullscreen2.logicBlock_position();me._tt_fullscreen2.logicBlock_text();me._navigation_bar.logicBlock_position();me._navigation_bar.logicBlock_scaling();me._tt_dig.logicBlock_text();me._tt_lab.logicBlock_text();me._tt_institute.logicBlock_text();me._tt_mount.logicBlock_text();me._dig_title.logicBlock_position();me._dig_title.logicBlock_scaling();me._title_dig.logicBlock_text();me._lab_title.logicBlock_position();me._lab_title.logicBlock_scaling();me._title_lab.logicBlock_text();me._institute_title.logicBlock_position();me._institute_title.logicBlock_scaling();me._title_institute.logicBlock_text();me._mount_title.logicBlock_position();me._mount_title.logicBlock_scaling();me._title_mount.logicBlock_text();me._line_menu_dig.logicBlock_position();me._line_menu_dig.logicBlock_scaling();me._line_menu_lab.logicBlock_position();me._line_menu_lab.logicBlock_scaling();me._line_menu_institute.logicBlock_position();me._line_menu_institute.logicBlock_scaling();me._iframe_fg.logicBlock_scaling();me._iframe_quarry.logicBlock_scaling();me._iframe_crew.logicBlock_scaling();me._iframe_arrival.logicBlock_scaling();me._iframe_green.logicBlock_scaling();me._iframe_library.logicBlock_scaling();me._iframe_skeleton.logicBlock_scaling();me._iframe_url.logicBlock_scaling();me._mobile_view.logicBlock_visible(); });
	player.addListener('fullscreenenter', function(args) { me._fullscreen.logicBlock_visible();me._exit_fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._fullscreen.logicBlock_visible();me._exit_fullscreen.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._active_skin.logicBlock_visible();me._tt_info.logicBlock_text();me._tt_fullscreen.logicBlock_text();me._tt_fullscreen2.logicBlock_position();me._tt_fullscreen2.logicBlock_text();me._navigation_bar.logicBlock_position();me._navigation_bar.logicBlock_scaling();me._tt_dig.logicBlock_text();me._tt_lab.logicBlock_text();me._tt_institute.logicBlock_text();me._tt_mount.logicBlock_text();me._dig_title.logicBlock_alpha();me._title_dig.logicBlock_text();me._lab_title.logicBlock_alpha();me._title_lab.logicBlock_text();me._institute_title.logicBlock_alpha();me._title_institute.logicBlock_text();me._mount_title.logicBlock_alpha();me._title_mount.logicBlock_text();me._line_menu_dig.logicBlock_alpha();me._line_menu_lab.logicBlock_alpha();me._line_menu_institute.logicBlock_alpha();me._iframe_fg.logicBlock_visible();me._iframe_quarry.logicBlock_visible();me._iframe_crew.logicBlock_visible();me._external_3.logicBlock_externalurl();me._svg_4_1.logicBlock_visible();me._svg_5_1.logicBlock_visible();me._iframe_arrival.logicBlock_visible();me._iframe_green.logicBlock_visible();me._external_4.logicBlock_externalurl();me._svg_4_2.logicBlock_visible();me._svg_4_3.logicBlock_visible();me._iframe_library.logicBlock_visible();me._iframe_skeleton.logicBlock_visible();me._external_2.logicBlock_externalurl();me._svg_4.logicBlock_visible();me._svg_5.logicBlock_visible();me._intro.logicBlock_position();me._iframe_url.logicBlock_visible();me._init_ga.logicBlock_visible();me._welcome_mount.logicBlock_visible();me._donors_mount.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._menu.logicBlock_position();me._menu.logicBlock_scaling();me._navigation_bar.logicBlock_position();me._navigation_bar.logicBlock_scaling();me._dig_title.logicBlock_position();me._dig_title.logicBlock_scaling();me._lab_title.logicBlock_position();me._lab_title.logicBlock_scaling();me._institute_title.logicBlock_position();me._institute_title.logicBlock_scaling();me._mount_title.logicBlock_position();me._mount_title.logicBlock_scaling();me._line_menu_dig.logicBlock_position();me._line_menu_dig.logicBlock_scaling();me._line_menu_lab.logicBlock_position();me._line_menu_lab.logicBlock_scaling();me._line_menu_institute.logicBlock_position();me._line_menu_institute.logicBlock_scaling();me._iframe_fg.logicBlock_scaling();me._iframe_quarry.logicBlock_scaling();me._iframe_crew.logicBlock_scaling();me._iframe_arrival.logicBlock_scaling();me._iframe_green.logicBlock_scaling();me._iframe_library.logicBlock_scaling();me._iframe_skeleton.logicBlock_scaling();me._iframe_url.logicBlock_scaling(); });
	player.addListener('varchanged_vis_active_skin', function(args) { me._active_skin.logicBlock_visible(); });
	player.addListener('varchanged_video_iframe', function(args) { me._iframe_fg.logicBlock_visible(); });
	player.addListener('varchanged_image_iframe', function(args) { me._iframe_quarry.logicBlock_visible(); });
	player.addListener('varchanged_crew_iframe', function(args) { me._iframe_crew.logicBlock_visible(); });
	player.addListener('varchanged_arrival_iframe', function(args) { me._iframe_arrival.logicBlock_visible(); });
	player.addListener('varchanged_green_iframe', function(args) { me._iframe_green.logicBlock_visible(); });
	player.addListener('varchanged_library_iframe', function(args) { me._iframe_library.logicBlock_visible(); });
	player.addListener('varchanged_skeleton_iframe', function(args) { me._iframe_skeleton.logicBlock_visible(); });
	player.addListener('varchanged_start', function(args) { me._intro.logicBlock_position(); });
	player.addListener('varchanged_url_iframe', function(args) { me._iframe_url.logicBlock_visible(); });
	player.addListener('varchanged_UA_ID', function(args) { me._init_ga.logicBlock_visible(); });
	player.addListener('varchanged_UA_category', function(args) { me._init_ga.logicBlock_visible(); });
	player.addListener('varchanged_welcome_msg', function(args) { me._welcome_mount.logicBlock_visible(); });
	player.addListener('varchanged_donors_msg', function(args) { me._donors_mount.logicBlock_visible(); });
	player.addListener('varchanged_activated_menu', function(args) { me._navigation_bar.logicBlock_position();me._navigation_bar.logicBlock_scaling(); });
	player.addListener('varchanged_the_dig', function(args) { me._dig_title.logicBlock_alpha();me._line_menu_dig.logicBlock_alpha(); });
	player.addListener('varchanged_the_lab', function(args) { me._lab_title.logicBlock_alpha();me._line_menu_lab.logicBlock_alpha(); });
	player.addListener('varchanged_the_institute', function(args) { me._institute_title.logicBlock_alpha();me._line_menu_institute.logicBlock_alpha(); });
	player.addListener('varchanged_the_mount', function(args) { me._mount_title.logicBlock_alpha(); });
	player.addListener('varchanged_gallery_1', function(args) { me._external_3.logicBlock_externalurl();me._svg_4_1.logicBlock_visible();me._svg_5_1.logicBlock_visible(); });
	player.addListener('varchanged_gallery_3', function(args) { me._external_4.logicBlock_externalurl();me._svg_4_2.logicBlock_visible();me._svg_4_3.logicBlock_visible(); });
	player.addListener('varchanged_gallery_2', function(args) { me._external_2.logicBlock_externalurl();me._svg_4.logicBlock_visible();me._svg_5.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_nodechange_changenode();me.callChildLogicBlocksHotspot_ht_url_link_changenode(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_nodechange_mouseover();me.callChildLogicBlocksHotspot_ht_url_link_mouseover(); });
	player.addListener('varchanged_vis_active_skin', function(args) { me.callChildLogicBlocksHotspot_ht_nodechange_varchanged_vis_active_skin();me.callChildLogicBlocksHotspot_ht_url_link_varchanged_vis_active_skin(); });
	player.addListener('varchanged_ht_pulse', function(args) { me.callChildLogicBlocksHotspot_ht_nodechange_varchanged_ht_pulse();me.callChildLogicBlocksHotspot_ht_url_link_varchanged_ht_pulse(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};