/**
*  컨설팅 표준화 작업
*  @FileName 	Frame.js 
*  @Creator 	consulting
*  @CreateDate 	2017.03.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.03.08     	consulting 	                최초 생성 
*  2018.01.16	    consulting					gfnGetApplication 추가				   
*******************************************************************************
*/

var pForm  = nexacro.Form.prototype;

pForm.FRAME_SYSVER				= "nexacro17";	// 넥사크로 제품구분 nexacro14/nexacro17
pForm.FRAME_MDI_MAX_CNT 		= 10;	 		//열린 메뉴 최대 갯수
pForm.FRAME_IS_COMBTN_USE 		= false;		//공통 버튼 사용유무
pForm.FRAME_IS_AUTOKILLFOCUS 	= false;		//static / div등을 클릭하더라도 이전컴포넌트에 killfocus를 강제로 발생시키기 위한 flag 
pForm.FRAME_REAL_TRACE_FN 		= trace;		//원본trace 함수

pForm.FRAME_MENUCOLUMNS = {
	menuId 		: "menuId",    	// MENU ID
	menuNm 		: "menuName",
	menuUrl 	: "menuUrl",
	infoUrl     : "menuInfoUrl",	// 오른쪽 frame 주소
	menuClass   : "menuClass",	// menu button cssclass 명
	menuLevel 	: "menuLevel",      // 메뉴레벨	
	menuOrder   : "menuOrder",
	upMenuId    : "upperMenuId",
	menuDisplay : "menuDisplayYn",
	auth        : "cmmnBtnYn",
	winId 		: "winId",      // 윈도우(프레임)아이디(열린 메뉴의 윈도우 아이디)
	pageUrl 	: "menuUrl",
	

	groupId 	: "groupId",
	menuArgs 	: "menuArgs",	// 메뉴파라메터
	
    title 		: "title"		// tab버튼 gdsOpenMenu
	
};

/**
* @class form open 시 초기 처리 <br>
* @param {Object} obj - 화면
* @return N/A
* @example 
* this.gfnFormOnLoad(this);
*/
pForm.gfnFormOnLoad = function(objForm)
{
	//trace("================ gfnFormOnLoad objForm : " + objForm.name);
		
	// 부모가 divWork일때(화면일때) keyDown 이벤트 추가 및 화면 loading 시간 측정
	if (objForm.parent.name == "divWork")
	{
		var objApp     = objForm.gfnGetApplication();
		var sStartDate = objApp.sStartDate;
		var nStartTime = objApp.nStartTime;
		
		var objDate  = new Date();
		var sEndDate = objDate.getYear()
						+"-"+String(objDate.getMonth()  ).padLeft(2, '0')
						+"-"+String(objDate.getDate()   ).padLeft(2, '0')
						+" "+String(objDate.getHours()  ).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();						
		var nElapseTime = (objDate.getTime() - nStartTime)/1000;
		//trace("gfnFormOnLoad : "+ sStartDate + " - " + nStartTime + " / " + sEndDate + " - " + nElapseTime);		
		
		objForm.parent.parent.staLodingTime.set_text("해당 화면의 loading 시간은 " +  + nElapseTime + " Sec 입니다.");
		
		// 키다운 이벤트 추가
		objForm.addEventHandler("onkeydown", this.gfnOnkeydown, this);	
		
		//killfocus 자동 추가
		if(this.FRAME_IS_AUTOKILLFOCUS) this.gfnSetAutoKillfocus(objForm);
	}
	
	// 팝업 일때 처리
	if (objForm.opener)
	{
		if (objForm.parent instanceof nexacro.ChildFrame)
		{
			// 키다운 이벤트 추가
			objForm.addEventHandler("onkeydown", this.gfnOnkeydown, this);
		}
		
		//killfocus 자동 추가
		if(this.FRAME_IS_AUTOKILLFOCUS) this.gfnSetAutoKillfocus(objForm);
		
		
// 		// 팝업이 modeless 일때 창닫을때 콜백함수 호출하여 값을 전달 받거나,
// 		// 리턴시 기본형(Primitive type)외 데이타를 리턴받을 수 있게 처리하는 예제 - modal, modalwindow에서 callback함수 및 return 방식 수정 필요
// 		var objChild = objForm.getOwnerFrame();
// 		if (objChild.popupType == "modeless") {
// 			var sPopupId  = objChild.popupId;
// 			var sCallBack = objChild.callback;
// 			
// 			// callBack 함수가 있을 때
// 			if (this.gfnIsNull(sCallBack) == false) {			
// 				// onclose 이벤트 추가
// 				objForm.addEventHandler("onclose", 
// 										function(obj, e) {
// 											var objRtn    = objForm.opener["rtnVal"];
// 											objForm.opener.lookupFunc(sCallBack).call(sPopupId, objRtn);
// 										}
// 										, this);
// 			}
// 		}
	}

	// QuikView 일때 처리
	if (nexacro.getEnvironmentVariable("evQuikView") == "Y") 
	{
		if (this.gfnIsNull(objForm.opener) && objForm.parent instanceof nexacro.ChildFrame)
		{
			// 키다운 이벤트 추가
			objForm.addEventHandler("onkeydown", this.gfnOnkeydown, this);
		}
	}
	
	// Component 초기화 처리
	this.gfnInitComp(objForm);
   
	// 다국어 처리
	this.gfnInitLang(objForm);	
};

/**
* @class form open 시 Component 초기화 처리 <br>
* @param {Object} obj - 화면
* @return N/A
* @example 
* this.gfnInitComp(this);
*/
pForm.gfnInitComp = function(objForm)
{
	//trace("================ gfnInitComp objForm : " + objForm.name);
	var arrComp = objForm.components;
	var nLength = arrComp.length;

	for (var i=0; i<nLength; i++)
	{
		//trace("================ arrComp[i] : " + arrComp[i]);
		if (arrComp[i] instanceof nexacro.Div)
		{
			// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
			if (this.gfnIsNull(arrComp[i].url)) this.gfnInitComp(arrComp[i].form);
		}
		else if (arrComp[i] instanceof nexacro.Tab)
		{
			var nPages = arrComp[i].tabpages.length;
			
			for (var j=0; j<nPages;j++)
			{	
				// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
				if (this.gfnIsNull(arrComp[i].tabpages[j].url)) this.gfnInitComp(arrComp[i].tabpages[j].form);
			}
		}
		else
		{
			// Grid 처리
			if (arrComp[i] instanceof nexacro.Grid) {
				this.gfnSetGrid(arrComp[i]);
			}
			
			// Edit 처리
			if (arrComp[i] instanceof nexacro.Edit)	
			{
				// _ms_clear user property가 true 일때만
				if (arrComp[i]._ms_clear == "true") {
					this._gfnSetEditMsClear(arrComp[i]);
				}
			}
			
			// Calendar 처리
			if (arrComp[i] instanceof nexacro.Calendar)
			{
				// 월달력 Popup Div 호출 이벤트 추가
				if (arrComp[i].uCalType == "MM") {
					arrComp[i].addEventHandler("ondropdown", this.gfnCalMMOndropdown, this);
				}
			}
		}
	}
};

/**
 * @description 각 화면에서 단축키 지정
*/
pForm.gfnOnkeydown = function(obj, e)
{
	//trace("e.ctrlkey : " + e.ctrlkey + " / e.keycode : " + e.keycode);
	
	// 디버그 창 : Ctrl + Q
	if (e.ctrlkey && e.keycode == 81)
	{
		// 운영환경에서는 실행 방지
		//if (nexacro.getEnvironmentVariable("evRunMode") == "R") return;
		
		var oArg = {};
		var oOption = {popuptype:"modeless", title:"디 버 그",width:"1080",height:"703"};
		this.gfnOpenPopup("debugging","cmm::cmmDebug.xfdl",oArg,"",oOption);	
	}
};

/**
 * @class left메뉴 클릭시 해당화면 호출함수 <br>
 * @param {Object} oObj 
 * @return N/A
 * @example 
 */
pForm.gfnCall = function(oObj)
{	
	if(!this.gfnIsNull(oObj) && typeof(oObj) !=  "object") return;	
	
	var objApp  = pForm.gfnGetApplication();
	var gdsOpen = objApp.gdsOpenMenu;				//열린 	  dataset	
	var ds      = oObj.ds;							//넘어온 dataset
	var nRow    = oObj.nRow;						//선택된 현재 row
	var oArgs 	= oObj.oArgs;   					//넘어온 arguments
	var sMenuId;

	if (!this.gfnIsNull( oObj.sMenuId)){
		sMenuId = oObj.sMenuId;
	}else{
		sMenuId = ds.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuId);
	}	
	
	var winid = gdsOpen.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.winId);

	if (!this.gfnIsNull(winid))
	{
		if (objApp.gvMdiFrame.form.isActiveFrame(winid, oArgs) == true)
		{	
			objApp.gvMdiFrame.form.fnMoveTab(winid);
			return;
		}
	}
	
	//열린메뉴 체크( application.gvMax = 8)	
	if( this.FRAME_MDI_MAX_CNT <= gdsOpen.getRowCount() ){
		          
		alert(this.FRAME_MDI_MAX_CNT +"개 초과하여 화면을 열수 없습니다");
		return false;
	}
	
	this.gfnNewMdi(sMenuId, nRow, oArgs);
};

/**
 * @class left메뉴 클릭시 해당화면 호출함수 <br>
 * @param {Object} oObj 
 * @return N/A
 * @example 
 */
pForm.gfnCallSDI = function(oObj)
{	
	if (!this.gfnIsNull(oObj) && typeof(oObj) !=  "object") return;	
	
	var objApp  = pForm.gfnGetApplication();
	var gdsOpen = objApp.gdsOpenMenu;							// 열린   Dataset	
	var ds      = oObj.ds;										// 넘어온 Dataset
	var nRow    = oObj.nRow;									// 선택된 현재 row
	var oArgs 	= oObj.oArgs; 									// 넘어온 Arguments
	var sMenuId;
	
	if (!this.gfnIsNull(oObj.sMenuId))
		sMenuId = oObj.sMenuId;
	else
		sMenuId = ds.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuId);
	
	if (system.navigatorname != "nexacro")
	{
		// History	
		var sHash 	= "menu:" + sMenuId;
		var oData	= {oArg : oObj.oArg};
		
		MyHistory.setLocationHash(sHash, oData);
	}
	
	this.gfnNewSdi(sMenuId, oArgs);
};

/**
 * @class gdsOpenMenu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴 <br>
 * @param {String} sMenuId - menuId
 * @param {Number} nRow - gdsOpenMenu의rowpostion
 * @param {Object} oArgs - arguments
 * @return N/A
 */
pForm.gfnNewMdi = function(sMenuId, nRow, oArgs)
{	
	var objApp   = pForm.gfnGetApplication();
	var gdsOpen  = objApp.gdsOpenMenu;		//열린 dataset
	var gdsUserMenuInfo  = objApp.gdsUserMenuInfo;
	var winid    = "win" + sMenuId + "_" + gdsOpen.getRowCount() + "_" + parseInt(Math.random() * 1000);		
	var sPageUrl = gdsUserMenuInfo.lookupAs(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.pageUrl);
	var sGroupId = gdsUserMenuInfo.lookupAs(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.groupId);

	// 화면 loading 시간 측정
	var objDate = new Date();
	var nStartTime = objDate.getTime();
    var sStartDate = objDate.getYear()
						+"-"+String(objDate.getMonth()).padLeft(2, '0')
						+"-"+String(objDate.getDate()).padLeft(2, '0')
						+" "+String(objDate.getHours()).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();
	objApp.nStartTime = nStartTime;
	objApp.sStartDate = sStartDate;
	
	// 다국어 처리
	var sColumn  = this.FRAME_MENUCOLUMNS.menuNm;
	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");
	if (sNowLang != "KO") {
		sColumn = sColumn+sNowLang;
	}
	
	var sMenuNm  = gdsUserMenuInfo.lookupAs(this.FRAME_MENUCOLUMNS.menuId, sMenuId, sColumn);
	var sInfoUrl = gdsUserMenuInfo.lookupAs(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.infoUrl);	//	2019.05.09
	if(this.gfnIsNull(sPageUrl)) return;		//pageURl 이 없으면 return
	this.gfnSetOpenMenuDs(winid, sMenuId, sMenuNm, sPageUrl, sGroupId);	// 열린메뉴 화면 삽입
	this.gfnSetRecentMenuDs(winid, sMenuId, sMenuNm, sPageUrl, sGroupId);	// 최근메뉴 삽입

	var objNewWin = new ChildFrame;
	objNewWin.init(winid, 0, 0, objApp.gvWorkFrame.getOffsetWidth() - 0, objApp.gvWorkFrame.getOffsetHeight() - 0);
	objApp.gvWorkFrame.addChild(winid, objNewWin);

	//objNewWin.set_tooltiptext(winid);
	objNewWin.arguments = [];
	objNewWin.set_dragmovetype("all");
	objNewWin.set_showtitlebar(false);
	objNewWin.set_resizable(true);
	objNewWin.set_openstatus("maximize");
	objNewWin.set_titletext(sMenuNm);
	objNewWin.set_showcascadetitletext(false);
	objNewWin.arguments["winKey"] = winid;
	objNewWin.arguments["menuId"] = sMenuId;
	objNewWin.arguments["menuNm"] = sMenuNm;
	objNewWin.arguments["pageUrl"] = sPageUrl;
	objNewWin.arguments["oArgs"] = oArgs;
	objNewWin.arguments["infoUrl"] = sInfoUrl;	//	2019.05.09
	objNewWin.set_formurl("frame::frameWork.xfdl");

	objApp.gvMdiFrame.form.fnAddTab(winid, sMenuNm);   //mdi tab button add	
	objApp.gvMdiFrame.form.isActiveFrame(winid);
	
	objNewWin.show();	
};


/**
 * @class gdsOpenMenu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴 <br>
 * @param {String} sMenuId - menuId
 * @param {Number} nRow - gdsOpenMenu의rowpostion
 * @param {Object} oArgs - arguments
 * @return N/A
 */
pForm.gfnNewSdi = function(sMenuId, oArgs)
{
	var objApp   = pForm.gfnGetApplication();
	var gdsOpen  = objApp.gdsOpenMenu;		//열린 dataset
	var gdsUserMenuInfo  = objApp.gdsUserMenuInfo;
	var sPageUrl = gdsUserMenuInfo.lookupAs(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.pageUrl);
	var sGroupId = gdsUserMenuInfo.lookupAs(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.groupId);

	// 화면 loading 시간 측정
	var objDate = new Date();
	var nStartTime = objDate.getTime();
    var sStartDate = objDate.getYear()
						+"-"+String(objDate.getMonth()	).padLeft(2, '0')
						+"-"+String(objDate.getDate()	).padLeft(2, '0')
						+" "+String(objDate.getHours()  ).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();
	objApp.nStartTime = nStartTime;
	objApp.sStartDate = sStartDate;
	
	// 다국어 처리
	var sColumn  = this.FRAME_MENUCOLUMNS.menuNm;
	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");
	if (sNowLang != "KO") 
		sColumn = sColumn+sNowLang;
	
	var sMenuNm  = gdsUserMenuInfo.lookupAs(this.FRAME_MENUCOLUMNS.menuId, sMenuId, sColumn);
	
	var objNewWin = objApp.gvWorkFrame;
		objNewWin.set_url("");
		
	// Div Arguments Setting
 	objNewWin.arguments = [];
 	objNewWin.arguments["winKey" ] = objNewWin.name;
 	objNewWin.arguments["menuId" ] = sMenuId;
 	objNewWin.arguments["menuNm" ] = sMenuNm;
 	objNewWin.arguments["pageUrl"] = sPageUrl;
 	objNewWin.arguments["oArgs"	 ] = oArgs;
	
	objNewWin.set_url("frameSDI::frameWork.xfdl");	
};

/**
 * @class 열린화면 데이터셋에 추가 <br>
 * @param {String} winid
 * @param {String} menuId
 * @param {String} strTitle
 * @param {String} spageUrl
 * @param {String} sGroupId
 * @return N/A
 */
pForm.gfnSetOpenMenuDs = function(winid, menuid, strTitle, spageUrl, sGroupId)
{
	var objApp  = pForm.gfnGetApplication();
	var gdsOpen = objApp.gdsOpenMenu ;  //열린 dataset
	var nRow = gdsOpen.addRow();
	gdsOpen.setColumn(nRow, this.FRAME_MENUCOLUMNS.winId, winid);
	gdsOpen.setColumn(nRow, this.FRAME_MENUCOLUMNS.menuId, menuid);
	gdsOpen.setColumn(nRow, this.FRAME_MENUCOLUMNS.title, strTitle);	
	gdsOpen.setColumn(nRow, this.FRAME_MENUCOLUMNS.groupId, sGroupId);
	gdsOpen.setColumn(nRow, "pageUrl", spageUrl);
	gdsOpen.setColumn(nRow, "infoSize", 0);
};


/**
 * @class 열린화면 데이터셋에 추가 <br>
 * @param {String} winid
 * @param {String} menuId
 * @param {String} strTitle
 * @param {String} spageUrl
 * @param {String} sGroupId
 * @return N/A
 */
pForm.gfnSetRecentMenuDs = function(winid, menuid, strTitle, spageUrl, sGroupId)
{
	var objApp  = pForm.gfnGetApplication();
	var gdsRecent = objApp.gdsRecentMenu ;  //열린 dataset
	
	if( this.FRAME_MDI_MAX_CNT == gdsRecent.getRowCount() )
	{
		gdsRecent.deleteRow(0);	// 삭제 후 추가
	}
	
	var row = gdsRecent.findRow(this.FRAME_MENUCOLUMNS.menuId, menuid);
	if ( row > -1 ) return;
	
	var nRow = gdsRecent.addRow();
	gdsRecent.setColumn(nRow, this.FRAME_MENUCOLUMNS.winId, winid);
	gdsRecent.setColumn(nRow, this.FRAME_MENUCOLUMNS.menuId, menuid);
	gdsRecent.setColumn(nRow, this.FRAME_MENUCOLUMNS.menuNm, strTitle);	
	gdsRecent.setColumn(nRow, this.FRAME_MENUCOLUMNS.groupId, sGroupId);
	gdsRecent.setColumn(nRow, this.FRAME_MENUCOLUMNS.menuUrl, spageUrl);
	gdsRecent.setColumn(nRow, "pageUrl", spageUrl);
};

/**
 * @class 해당화면의 정보 반환 <br>
 * @param {String} 	sName : winKey, menuId, menuNm, pageUrl, oArgs
 * @return String
 */
pForm.gfnGetArgument = function(sName)
{
	return this.getOwnerFrame().arguments[sName];
};

/**
 * @class 해당화면 데이터셋에 추가 <br>
 * @param {String} 	sName : winKey, menuId, menuNm, pageUrl, oArgs
 * @return String
 */
pForm.gfnGetServerUrl = function()
{
	var urlPath = "";
    if (system.navigatorname == "nexacro") 
	{
	    var objEnv = nexacro.getEnvironment();
		urlPath = objEnv.services["svcUrl"].url;
	}else{
		urlPath = window.location.protocol + "//" + window.location.host + "/";
		//urlPath+="/nexacro/"; //주석처리함.yjlim.20191122
	}
	//trace("urlPath : " + urlPath);
	return urlPath;
};

/**
 * @class 현재 실행된 어플리케이션의 Application 오브젝트를 반환하는 메소드 <br>
 * @param  none
 * @return Object
 */
pForm.gfnGetApplication = function()
{
	// nexacro 14/17 구분하여 Application object를 사용한다.
	var objApp = (pForm.FRAME_SYSVER == "nexacro17" ? nexacro.getApplication() : application);
	
	return objApp;
};


/**
 * @class html5처럼 div/static에 클릭시에도 입력컴포넌트에 killfocus를 발생하기 위하여 최상위 form/div의 onlbuttonup 이벤트를 생성하여 처리함.
 * @param {object} 	obj 업무화면기준 최상위 form or 공통 div
 * @return String
 */ 
pForm.gfnSetAutoKillfocus = function(obj)
{
	//1회만 이벤트를 적용하기 위해서 userpropertie를 사용하여 체크함.
	if (obj.u_autOnkillYn != "Y"  ) 
	{
		obj.addEventHandler("onlbuttonup", function(obj,e) 
		{
			obj.u_autOnkillYn = "Y";

			//현재포커스를 컴포넌트 찾음 
			var objComp = obj.getFocus();
			
			if (objComp == null) return;
			if (objComp == e.fromreferenceobject) return;
			
			//focus를 이동할수 있는 컴포넌트는 제외
			if (String(e.fromreferenceobject) != "[object Static]"
			 && String(e.fromreferenceobject) != "[object Div]"
			 && String(e.fromreferenceobject) != "[object Tab]"
			 && String(e.fromreferenceobject) != "[object Form]"
			 )
			 {
				return;
			 }
			 
			 
			//현재 포커스의 컴포넌트기준으로 가상의 컴포넌트생성후 focus를 준다.
			var sComp = this._gfnGetKiilFocusObj(objComp);								
			sComp.setFocus(false);	//콤포넌트를 기준으로 스크롤을 재설정 안함.
		}, obj);
	}
}


/**
 * @class [내부호출함수] static / div 클릭시 이전컴포넌트 killfocus를 생성하기 위한 focus용 컴포넌트 반환
 * @private
 * @param  {object} objComp 대상컴포넌트
 * @return {object} killfocus를 생성하기 위한 focus용 컴포넌트
*/ 
pForm._gfnGetKiilFocusObj = function(objComp)
{
	//var objComp = obj;
	var nLeft = objComp.getOffsetLeft();
	var nTop  = objComp.getOffsetTop();
	var sKillFocusComp = "sImgKillFocus";
	var sComp = objComp.parent[sKillFocusComp];

	if (sComp == null)
	{	
		var objImageViewer = new ImageViewer(sKillFocusComp, "absolute", nLeft, nTop, 0, 0, null, null);
		objComp.parent.addChild(sKillFocusComp, objImageViewer); 
		objImageViewer.show(); 
		objImageViewer.set_tabstop(false);
		objImageViewer.set_taborder(parseInt(objComp.taborder) + 1);
		sComp = objImageViewer;
	}
	else
	{
		sComp.move(nLeft, nTop)
	}
	return sComp;
};