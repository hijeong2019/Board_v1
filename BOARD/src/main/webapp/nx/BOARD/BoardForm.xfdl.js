(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("boardForm");
            this.set_titletext("Login");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"isOk\" type=\"string\" size=\"256\"/><Column id=\"description\" type=\"string\" size=\"32\"/><Column id=\"hit\" type=\"int\" size=\"4\"/><Column id=\"id\" type=\"string\" size=\"32\"/><Column id=\"keyword\" type=\"string\" size=\"32\"/><Column id=\"name\" type=\"string\" size=\"32\"/><Column id=\"regUser\" type=\"string\" size=\"32\"/><Column id=\"replyCnt\" type=\"string\" size=\"32\"/><Column id=\"searchType\" type=\"string\" size=\"32\"/><Column id=\"useYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"searchWord\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00_01","41.13%","13","143","54",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("BOARD");
            obj.set_textAlign("center");
            obj.set_font("bold 40px/19px \"Malgun Gothic\"");
            obj.set_color("#5b92e4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Logout",null,"16","62","24","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("????????????");
            obj.set_cursor("pointer");
            obj.set_background("#5B92E4");
            obj.set_boxShadow("1px 1px 2px 0px #7c7c7c");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("sta00",null,"17","119","23","75",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("?????? ????????? ????????????");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","sta00_01:3","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("LIST");
            obj.set_font("bold 24px/19px \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page",null,"72","114","22","220",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cursor("pointer");
            var cbo_page_innerdataset = new nexacro.NormalDataset("cbo_page_innerdataset", obj);
            cbo_page_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">??????</Col></Row><Row><Col id=\"datacolumn\">????????? ?????????</Col><Col id=\"codecolumn\">id</Col></Row><Row><Col id=\"datacolumn\">??????</Col><Col id=\"codecolumn\">name</Col></Row><Row><Col id=\"datacolumn\">??????</Col><Col id=\"codecolumn\">description</Col></Row></Rows>");
            obj.set_innerdataset(cbo_page_innerdataset);
            obj.set_text("??????");
            obj.set_value("all");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"70","50","25","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("??????");
            obj.set_boxShadow("1px 1px 2px 0px #7c7c7c");
            obj.set_color("#5b92e4");
            obj.set_background("white");
            obj.set_border("1px inset #5b92e4");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search",null,"70","150","24","65",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_displaynulltext("????????? ??????");
            obj.set_cursor("text");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Board","1.25%","sta01:47.83%",null,null,"10","35",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_binddataset("dsBoard");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"180\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"????????? ?????????\"/><Cell col=\"2\" text=\"??????\"/><Cell col=\"3\" text=\"??????\"/><Cell col=\"4\" text=\"????????????\"/><Cell col=\"5\" text=\"?????????\"/><Cell col=\"6\" text=\"?????????\"/><Cell col=\"7\" text=\"?????????\"/></Band><Band id=\"body\"><Cell text=\"expr:currow +1\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:id\"/><Cell col=\"2\" text=\"bind:name\"/><Cell col=\"3\" text=\"bind:description\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:useYn\" combodataset=\"dsUseYn\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"5\" textAlign=\"center\" text=\"bind:regUser\"/><Cell col=\"6\" textAlign=\"right\" text=\"bind:replyCnt\"/><Cell col=\"7\" textAlign=\"right\" text=\"bind:hit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Insert",null,"grd_Board:6","52","24","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("??? ??????");
            obj.set_background("white");
            obj.set_color("#5b92e4");
            obj.set_border("1px inset #5b92e4");
            obj.set_cursor("pointer");
            obj.set_boxShadow("1px 1px 2px 0px #7c7c7c");
            this.addChild(obj.name, obj);

            obj = new Static("sta_userId",null,"16","120","23","202",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BoardForm.xfdl", function() {
        /**
        *  @MenuPath    BOARD > BoardForm
        *  @FileName 	BoardForm.xfdl
        *  @Creator     ?????????
        *  @CreateDate 	2020.04.09
        *  @Desction    ????????? ?????? ??????

        ************** ?????? ?????? ?????? ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2020.04.09     	consulting 	        ?????? ??????
        *******************************************************************************
        */

        /***********************************************************************************************
        * FORM EVENT ??????(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fnFormInit = function()
        	{
        		this.gfnFormOnLoad(this); //?????????[??????]
        		this.fnSearch(); //????????? ??????
        	};
        };

        //???????????? ????????? ??????
        var objApp = nexacro.getApplication();
        var loginId = objApp.gdsUserAccount.getColumn(0, "id");
        this.sta_userId.set_text(loginId);

        /************************************************************************************************
        * TRANSACTION ????????? ?????? ??????
        ************************************************************************************************/
        //????????? ?????? ??????, ??????
        this.fnBoardSelect = function()
        {
        	var strSvcId    = "selectBoardInfo";
        	var strSvcUrl   = "/board/mainboard/boardList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsBoard=dsBoard";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(
        						strSvcId , 		// transaction??? ???????????? ?????? svc id???;
        						strSvcUrl , 	// trabsaction??? ????????? ??????;
        						inData , 		// ??????????????? ?????? dataset id , a=b????????? ??????????????? ??????????????? ??????;
        						outData , 		// ????????????????????? ?????? dataset id, a=b????????? ??????????????? ??????????????? ??????;
        						strArg , 		// ??????????????? ?????? arguments, strFormData="20120607";
        						callBackFnc , 	// ?????? ?????????;
        						"LIST"			// LIST/REG/MOD/RMV/PROC;
        	);
        };

        // //????????? ??????, ??????
        // this.fnProc = function()
        // {
        // 	var strSvcId    = "boardProc";
        // 	var strSvcUrl   = "/board/mainboard/boardProc.do";
        // 	var inData      = "dsBoard=dsBoard:U";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction(
        // 						strSvcId , 		// transaction??? ???????????? ?????? svc id???;
        // 						strSvcUrl , 	// trabsaction??? ????????? ??????;
        // 						inData , 		// ??????????????? ?????? dataset id , a=b????????? ??????????????? ??????????????? ??????, :U??? ???????????? ????????? ??????;
        // 						outData , 		// ????????????????????? ?????? dataset id, a=b????????? ??????????????? ??????????????? ??????;
        // 						strArg , 		// ??????????????? ?????? arguments, strFormData="20120607";
        // 						callBackFnc , 	// ?????? ?????????;
        // 						"LIST"			// LIST/REG/MOD/RMV/PROC;
        // 	);
        // }

        /************************************************************************************************
        * CALLBACK ?????? ????????????
        ************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if( errorCode != 0 )
        	{
        		trace(errorCode + ">>>" + errorMsg );

        		//???????????? ????????? ?????? ?????????????????? ???????????????.\n{0}
        		this.gfnAlert("msg.server.error.msg",[errorMsg]);
        		return;
        	}

        	switch(svcID)
        	{
        		case "selectBoardInfo" :
        			//trace(this.dsBoard.saveXML());
        			//????????? ???????????? ????????? ??? ????????? ???????????? ??????
        			//this.grd_Board.createFormat();
        			break;

        		case "boardProc" :
        			//this.dsBoard.getColumn(this.dsBoard.rowposition, "id")
        			this.fnSearch();
        			break;
        	}
        };

        /************************************************************************************************
        * ????????? FUNCTION ??????
        ************************************************************************************************/
        /**
        * @description ????????? ??????
        */
        this.fnSearch = function()
        {
        	//??????
        	if(this.fnSearchParamSet())
        	{
        		//??????
        		this.fnBoardSelect();
        	}
        };


        /**
         * @description ?????? dataset ?????????
        */
        this.fnSearchParamSet = function()
        {
        	//?????? DS ?????????
        	this.dsSearch.clearData();

        	//?????? DS row ??????
        	var nRow = this.dsSearch.addRow();

        	//??????
        	if(!this.gfnIsNull(this.edt_search.value))
        	{
        		this.dsSearch.setColumn(nRow,"searchType", this.cbo_page.value);
        		this.dsSearch.setColumn(nRow,"searchWord", this.edt_search.value);
        	}
        	else
        	{
        		this.dsSearch.setColumn(nRow,"searchType", ""); //null?????? contorller?????? ????????? ???????????? ????????? null??? ????????????
        		this.dsSearch.setColumn(nRow,"searchWord", "");
        	}
        	return true;
        };

        /*
        * @description ??????????????? ????????? PadLeft ??????
        */
        this.fnLpad = function(str, padLen, padStr)
        {
        	if (padStr.length > padLen)
        	{
                trace("?????? : ???????????? ?????? ???????????? ?????? ???????????? ?????????");
                return str;
            }

            str += ""; // ?????????
            padStr += ""; // ?????????

            while (str.length < padLen)
        	str = padStr + str;
            str = str.length >= padLen ? str.substring(0, padLen) : str;

            return str;
        };

        // /*
        // * @description ????????? ???????????? ??? ????????????
        // */
        // this.fnValidation = function()
        // {
        // 	for(var i=0; i<this.dsBoard.rowcount; i++)
        // 	{
        // 		var chkName, chkdescription, chkuseYn;
        // 		var nCnt = 0;
        //
        // 		if(this.dsBoard.getRowType(i) == 2)
        // 		{
        // 			chkname = this.dsBoard.getColumn(i, "name")
        // 			chkdescription = this.dsBoard.getColumn(i, "description")
        // 			chkuseYn = this.dsBoard.getColumn(i, "useYn")
        //
        // 			if(this.gfnIsNull(chkname) || this.gfnIsNull(chkdescription) || this.gfnIsNull(chkuseYn))
        // 			{
        // 				nCnt++;
        // 			}
        // 		}
        // 	}
        //
        // 	if(nCnt > 0)
        // 	{
        // 		this.alert("???????????? ?????? ??????????????????");
        // 		return false;
        // 	}
        // 	else
        // 		return true;
        // };
        /************************************************************************************************
        * ??? COMPONENT ??? EVENT ??????
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Insert" :
        			this.fnInsert();
        		break;

        		case "btn_Search" :
        			this.fnSearch();
        		break;

        		case "btn_Logout" :
        			var objApp = nexacro.getApplication();
        			var bOK = objApp.confirm("???????????????????????????????" , "????????????" );
        			if(bOK)
        			{
        				var objApp = nexacro.getApplication();
        				objApp.gdsUserAccount.clearData(); //session ?????????
        				//this.gdsUserAccount.saveXML();
        				this.dsBoard.clear
        				this.alert("?????????????????????.");
        				this.parent.parent.parent.parent.parent.form.fnSetUrl("BOARD::LoginForm.xfdl");
        			}
        			else
        			{
        				this.alert("?????????????????????.");
        			}
        		break;
        	}
        };

        /*
        *	@description ????????? ???????????? ??????
        */
        this.grd_Board_oncelldblclick = function(obj,e)//cell ?????????????????? ??? ???????????? ?????????
        {
        	if(e.col == 0 || e.col == 1) //0,1?????? ?????? ?????? ???
        	{
        		//?????? ??????
        		var sTitle = "BOARD DETAIL";
        		var sFormUrl  = "BOARD::BoardlistForm.xfdl";

        		var oArg = {
        					paramJson:{
        								"boardId" : this.dsBoard.getColumn(e.row, "id")
        					}
        					,paramDataset:null
        					,paramUrl:sFormUrl
        		};
        		var oOption = {title:sTitle,width:"1000",height:"750"};	//top, left??? ???????????? ????????? ??????????????? //"top:20,left:370"
        		var sPopupCallBack = "fnPopupCallback";
        		this.gfnOpenPopup("boardDetailPopup","cmm::cmmPopup.xfdl", oArg, sPopupCallBack, oOption);
        	}
        };

        /*
        *	@description ????????? ?????? ??????
        */
        this.fnInsert = function()
        {
        	var paramJson = this.getOwnerFrame().paramJson;

        	//????????? ????????? ??????
        	for(var i=0; i<this.dsBoard.rowcount; i++)
        	{
        		var max = -987654321;
        		var id = this.dsBoard.getColumn(i, "id");

        		id = id.split("-")[1];

        		if(max < id)
        		{
        			max = id;
        		}
        		max++;
        	}

        	//?????? ??????
        	var sTitle = "BOARD INSERT";
        	var sFormUrl  = "BOARD::BoardInsertForm.xfdl";

        	var oArg = {
        					paramJson:{
        								  "boardId"		: this.fnLpad(max, 5, '0')
        							  }
        				   ,paramDataset:null
        				   ,paramUrl:sFormUrl
        			   };
        	var oOption = {title:sTitle,width:"1000",height:"750"};	//top, left??? ???????????? ????????? ??????????????? //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("boardInsertPopup","cmm::cmmPopup.xfdl", oArg, sPopupCallBack, oOption);
        };

        /*
        *	@description ?????? ?????? ??????
        */
        this.fnPopupCallback = function(strId, strVal)
        {
        	var rtnObj;

        	//if(!this.gfnIsNull(strVal))
        	//rtnObj = JSON.parse(strVal);

        	switch(strId)
        	{
        		case "boardDetailPopup":
        			this.fnSearch();
        		break;

        		case "boardInsertPopup":
        			this.fnSearch();
        		break;
        	}
        };

        this.edt_search_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.btn_Search.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_Logout.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.edt_search.addEventHandler("onkeydown",this.edt_search_onkeydown,this);
            this.grd_Board.addEventHandler("oncelldblclick",this.grd_Board_oncelldblclick,this);
            this.grd_Board.addEventHandler("onheadclick",this.grd_Board_onheadclick,this);
            this.btn_Insert.addEventHandler("onclick",this.comm_Click,this);
        };
        this.loadIncludeScript("BoardForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
