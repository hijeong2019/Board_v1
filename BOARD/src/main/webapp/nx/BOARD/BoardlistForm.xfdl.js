(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("boardlistForm");
            this.set_titletext("Login");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoardDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"description\" type=\"string\" size=\"32\"/><Column id=\"hit\" type=\"int\" size=\"4\"/><Column id=\"id\" type=\"string\" size=\"32\"/><Column id=\"name\" type=\"string\" size=\"32\"/><Column id=\"regUser\" type=\"string\" size=\"32\"/><Column id=\"replyCnt\" type=\"string\" size=\"32\"/><Column id=\"useYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchBoardId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReplyList", this);
            obj._setContents("<ColumnInfo><Column id=\"isOk\" type=\"string\" size=\"256\"/><Column id=\"contents\" type=\"string\" size=\"32\"/><Column id=\"grp_id\" type=\"int\" size=\"4\"/><Column id=\"id\" type=\"string\" size=\"32\"/><Column id=\"level_id\" type=\"int\" size=\"4\"/><Column id=\"mod_date\" type=\"datetime\" size=\"17\"/><Column id=\"parent_id\" type=\"int\" size=\"4\"/><Column id=\"reg_date\" type=\"datetime\" size=\"17\"/><Column id=\"rid\" type=\"int\" size=\"4\"/><Column id=\"seq_id\" type=\"int\" size=\"4\"/><Column id=\"writer\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00_01","33%","7","310","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("????????? ??????");
            obj.set_textAlign("center");
            obj.set_font("bold 40px/19px \"Malgun Gothic\"");
            obj.set_color("#5b92e4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Update",null,"272","50","24","81",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("??????");
            obj.set_color("white");
            obj.set_background("#5b92e4");
            obj.set_cursor("pointer");
            obj.set_boxShadow("1px 1px 2px 0px #7c7c7c");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","57","105","76","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("??????");
            obj.set_font("16px/19px \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_02","57","70","76","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("??????");
            obj.set_font("16px/19px \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_02_00","57","206","76","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("????????????");
            obj.set_font("16px/19px \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","57","244","76","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("?????????");
            obj.set_font("16px/19px \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","133","67",null,"28","81",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_description","133","104",null,"89","81",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_register","133","241",null,"28","81",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("white");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_reply","57","330",null,null,"81","42",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("1px solid ");
            obj.set_binddataset("dsReplyList");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"380\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"????????????\"/><Cell col=\"3\" text=\"?????????\"/><Cell col=\"4\" text=\"????????????\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:isOk\"/><Cell col=\"1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:contents\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level_id\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:writer\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:reg_date\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","57","297","153","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("REPLY");
            obj.set_font("bold 18px/19px \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ReplyDelete",null,null,"65","24","151","16",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("?????? ??????");
            obj.set_cursor("pointer");
            obj.set_background("white");
            obj.set_color("#5b92e4");
            obj.set_boxShadow("1px 1px 2px 0px #7c7c7c");
            obj.set_border("1px inset #5b92e4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ReReplyInsert",null,null,"65","24","221","16",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("?????? ??????");
            obj.set_cursor("pointer");
            obj.set_background("white");
            obj.set_color("darkgreen");
            obj.set_boxShadow("1px 1px 2px 0px #7c7c7c");
            obj.set_border("1px inset darkgreen");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ReplyInsert",null,null,"65","24","81","16",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("?????? ??????");
            obj.set_cursor("pointer");
            obj.set_background("white");
            obj.set_color("#5b92e4");
            obj.set_boxShadow("1px 1px 2px 0px #7c7c7c");
            obj.set_border("1px inset #5b92e4");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_useyn","133","202",null,"30","81",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_color("black");
            obj.set_opacity("1");
            var cbo_useyn_innerdataset = new nexacro.NormalDataset("cbo_useyn_innerdataset", obj);
            cbo_useyn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(cbo_useyn_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete",null,"272","52","24","136",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("??? ??????");
            obj.set_background("#5b92e4");
            obj.set_color("white");
            obj.set_cursor("pointer");
            obj.set_boxShadow("1px 1px 2px 0px #7c7c7c");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_name","value","dsBoardDetail","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","txt_description","value","dsBoardDetail","description");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_register","value","dsBoardDetail","regUser");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cbo_useyn","value","dsBoardDetail","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BoardlistForm.xfdl", function() {
        /************************************************************************************************
         * FORM ?????? ?????? ??????
         ************************************************************************************************/


        /***********************************************************************************************
        * FORM EVENT ??????(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	var paramJson = this.getOwnerFrame().paramJson;

        	//??????????????? ?????? ??? ???????????? ?????? ??????.
        	//edit ??? set ??? ?????? ???.
        	if( !this.gfnIsNull(paramJson.boardId) ){
        		this.dsSearch.clearData();
        		this.dsSearch.addRow();

        		this.dsSearch.setColumn(0, "searchBoardId", paramJson.boardId);
        		this.fnBoardDetailSelect();
        		this.fnBoardHit();
        	}
        };

        /************************************************************************************************
        * TRANSACTION ????????? ?????? ??????
        ************************************************************************************************/
        //????????? ????????? ??????
        this.fnBoardHit = function()
        {
        	var strSvcId    = "boardHitInfo";
        	var strSvcUrl   = "/board/mainboard/boardHit.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "";
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

        //????????? ??????, ?????? ??????
        this.fnBoardDetailSelect = function()
        {
        	var strSvcId    = "selectBoardDetailInfo";
        	var strSvcUrl   = "/board/mainboard/boardDetail.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsBoardDetail=dsBoardDetail dsReplyList=dsReplyList";
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

        //????????? ??????
        this.fnUpdate = function()
        {
        	var strSvcId    = "boardDetailProc";
        	var strSvcUrl   = "/board/mainboard/boardUpdate.do";
        	var inData      = "dsBoardDetail=dsBoardDetail";
        	var outData     = "";
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
        }

        //????????? ??????
        this.fnDelete = function()
        {
        	var strSvcId    = "boardDetailProc";
        	var strSvcUrl   = "/board/mainboard/boardDelete.do";
        	var inData      = "dsBoardDetail=dsBoardDetail";
        	var outData     = "";
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
        }

        //?????? ??????, ??????
        this.fnReplyProc = function()
        {
        	var strSvcId    = "replyProc";
        	var strSvcUrl   = "/board/mainboard/replyProc.do";
        	var inData      = "dsReplyList=dsReplyList:U";
        	var outData     = "";
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
        }

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
        		case "selectBoardDetailInfo" :
        			trace(this.dsBoardDetail.saveXML());
        			if(this.dsReplyList.rowcount < 1) //????????? ?????????
        			{
        				this.btn_ReReplyInsert.set_visible(false); //???????????? false
        			}

        			//????????? ??????????????? ?????? ???????????? enable ????????????
        			var objApp = nexacro.getApplication();
        			var loginId = objApp.gdsUserAccount.getColumn(0, "id");

        			if(this.dsBoardDetail.getColumn(0, "regUser") != loginId)
        			{
        				this.edt_name.set_enable(false);
        				this.txt_description.set_enable(false);
        				this.cbo_useyn.set_enable(false);
        				this.edt_register.set_enable(false);
        			}
        			else
        			{
        				this.btn_Update.set_visible(true);
        				this.btn_Delete.set_visible(true);
        			}
        			//this.dsBoardDetail.set_updatecontrol(false);
        			//this.dsBoardDetail.setRowType(0, "u");
        		break;

        		case "boardDetailProc" :
        		break;

        		case "replyProc":
        			this.fnBoardDetailSelect();
        		break;
        	}
        };

        /*
        *	@description ?????? ?????? ??????
        */
        this.fnPopupCallback = function(strId, strVal)
        {
        	var rtnObj;

        	if(!this.gfnIsNull(strVal))
        		rtnObj = JSON.parse(strVal);

        	switch(strId)
        	{
        		case "boardReplyRegPopup":
        			this.fnBoardDetailSelect();
        		break;

        		case "boardReReplyRegPopup":
        			this.fnBoardDetailSelect();
        		break;

        		case "boardReplyUpdatePopup":
        			this.fnBoardDetailSelect();
        		break;
        	}
        };

        /************************************************************************************************
        * ????????? FUNCTION ??????
        ************************************************************************************************/
        /*
        *	@description ?????? ????????????
        */
        this.fnValidation = function()
        {
        	if(this.gfnIsNull(this.edt_name.value) || this.gfnIsNull(this.txt_description.value) || this.gfnIsNull(this.cbo_useyn.value) || this.gfnIsNull(this.edt_register.value))
        	{
        		this.alert("???????????? ?????? ??????????????????.");
        		return false;
        	}
        	else
        		return true;
        };


         /************************************************************************************************
         * ??? COMPONENT ??? EVENT ??????
         ************************************************************************************************/
        /*
        *	@description ???????????? ??????
        */
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		//????????? ??????
        		case "btn_Delete" :
        			var objApp = nexacro.getApplication();
        			var loginId = objApp.gdsUserAccount.getColumn(0, "id");

        			trace(this.dsBoardDetail.saveXML());
        			if(this.edt_register.value != loginId)
        			{
        				this.alert("???????????? ?????? ???????????????.");
        				return;
        			}

        			var boardid = this.dsBoardDetail.getColumn(0, "id");
        			var objApp = nexacro.getApplication();
        			var bOK = objApp.confirm("????????? '" + boardid + "'??? ?????????????????????????" , "????????? ??????" );
        			if(bOK)
        			{
        				this.alert("???????????????.");
        				this.fnDelete();
        			}
        			else
        			{
        				this.alert("?????????????????????.");
        			}
        		break;

        		//????????? ??????
        		case "btn_Update" :
        			var objApp = nexacro.getApplication();
        			var loginId = objApp.gdsUserAccount.getColumn(0, "id");

        			if(this.dsBoardDetail.getColumn(0, "regUser") != loginId)
        			{
        				this.alert("???????????? ?????? ???????????????.");
        				this.edt_name.set_enable(false);
        				this.txt_description.set_enable(false);
        				this.cbo_useyn.set_enable(false);
        				this.edt_register.set_enable(false);
        			}
        			else
        			{
        				if(this.fnValidation())
        				{
        					this.alert("???????????? ?????????????????????.");
        					this.fnUpdate();
        				}
        			}
        		break;

        		//?????? ??????
        		case "btn_ReplyInsert":
        			this.fnReply();
        		break;

        		//?????? ??????
        		case "btn_ReReplyInsert":
        			this.fnReReply();
        		break;

        		//?????? ??????
        		case "btn_ReplyDelete":
        			var objApp = nexacro.getApplication();
        			var loginId = objApp.gdsUserAccount.getColumn(0, "id");

        			var array = new Array();
        			array = this.dsReplyList.extractRows("isOk=='" + 1 + "'"); //extractRows : ?????????????????? ???????????? ??? ????????? ??????

        			for(var i=0; i<array.length; i++)
        			{
        				if(this.dsReplyList.getColumn(array[i], "writer") == loginId)
        				{
        					var nRow = this.dsReplyList.findRow("rid", this.dsReplyList.getColumn(array[i], "rid"));
        					var replycon = this.dsReplyList.getColumn(nRow, "contents");

        					var objApp = nexacro.getApplication();
        					var bOK = objApp.confirm("?????? '" + replycon + "' ?????????????????????????" , "?????? ??????" );
        					if(bOK)
        					{
        						this.dsReplyList.deleteRow(nRow);
        						this.alert("???????????????.");
        						this.fnReplyProc();
        					}
        					else
        					{
        						this.alert("?????????????????????.");
        					}
        				}
        				else
        				{
        					this.alert("???????????? ?????? ???????????????.");
         					return;
        				}
        			}
        		break;
        	}
        };

        /*
        *	@description ???????????? ??????
        */
        this.fnReply = function()
        {
        	var paramJson = this.getOwnerFrame().paramJson;

        	//?????? ??????
        	var sTitle = "REPLY INSERT";
        	var sFormUrl  = "BOARD::BoardReplyRegForm.xfdl";

        	var oArg = {
        					paramJson:{
        									 "boardId" : paramJson.boardId
        							  }
        				   ,paramDataset:null
        				   ,paramUrl:sFormUrl
        			   };
        	var oOption = {title:sTitle,width:"640",height:"480"};	//top, left??? ???????????? ????????? ??????????????? //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("boardReplyRegPopup","cmm::cmmPopup.xfdl", oArg, sPopupCallBack, oOption);
        }

        /*
        *	@description ???????????? ??????
        */
        this.fnReReply = function()
        {
        	var rposition = this.dsReplyList.rowposition;

        	if(!this.gfnIsNull(rposition))
        	{
        		var sTitle = "REREPLY INSERT";
        		var sFormUrl  = "BOARD::BoardReReplyRegForm.xfdl";

        		var oArg = {
        						paramJson:{
        										  "rid" 	  : this.dsReplyList.getColumn(rposition, "rid")
        										 , "id"  	  : this.dsReplyList.getColumn(rposition, "id")
        										 , "seq_id"   : this.dsReplyList.getColumn(rposition, "seq_id")
        										 , "grp_id"   : this.dsReplyList.getColumn(rposition, "grp_id")
        								  }
        					   ,paramDataset:null
        					   ,paramUrl:sFormUrl
        				   };
        		var oOption = {title:sTitle,width:"640",height:"480"};	//top, left??? ???????????? ????????? ??????????????? //"top:20,left:370"
        		var sPopupCallBack = "fnPopupCallback";
        		this.gfnOpenPopup("boardReReplyRegPopup","cmm::cmmPopup.xfdl", oArg, sPopupCallBack, oOption);
        	}
        }

        /*
        *	@description ?????? ?????? ??????
        */
        this.grd_reply_oncelldblclick = function(obj,e)
        {
        	if(e.col == 1 || e.col == 2) //1,2?????? ?????? ?????? ???
        	{
        		//?????? ??????
        		var sTitle = "REPLY DETAIL";
        		var sFormUrl  = "BOARD::BoardReplyUpdateForm.xfdl";

        		var oArg = {
        						paramJson:{
        										  "rid"   : this.dsReplyList.getColumn(e.row, "rid")
        								  }
        					   ,paramDataset:null
        					   ,paramUrl:sFormUrl
        				   };
        		var oOption = {title:sTitle,width:"640",height:"480"};	//top, left??? ???????????? ????????? ??????????????? //"top:20,left:370"
        		var sPopupCallBack = "fnPopupCallback";
        		this.gfnOpenPopup("boardReplyUpdatePopup","cmm::cmmPopup.xfdl", oArg, sPopupCallBack, oOption);s
        	}
        };


        /*
        *	@description ????????? ?????? ??????, ??????
        */
        // this.grd_reply_onheadclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        // {
        // 	if(e.col == 0) //0?????? column?????? ???????????? ???????????????
        // 	{
        // 		var nValue = this.grd_reply.getCellText(-1, 0); //head??? ????????? cell??? ?????? ??????
        //
        // 		nValue = (nValue == "1" ? "0" : "1");
        // 		//this.dsReplyList.set_enableevent(false);
        // 		for(var i=0; i<this.dsReplyList.rowcount; i++)
        // 		{
        // 			this.dsReplyList.setColumn(i, "isOk", nValue); //?????? row??? isok??? nValue?????? ??????
        // 		}
        // 		//this.dsReplyList.set_enableevent(true); //????????? ?????? ??? ?????? dataset ????????? ?????????
        // 		this.grd_reply.setCellProperty("head", 0, "text", nValue); //head cell?????? ???????????? ??????
        // 	}
        // };
        this.grd_reply_onheadclick = function(obj,e)
        {
        	if(e.col == 0) //???????????? ????????? column??? 0?????? ??????
        	{
        		//if(this.gfnIsNull(obj.getCellValue(e.row, e.cell)) || obj.getCellValue(e.row, e.cell) == 0) //???????????? ????????? ?????? ?????? ?????? 0??????
        		if(this.gfnIsNull(obj.getHeadValue(e.cell)) || obj.getHeadValue(e.cell) == 0) //???????????? ????????? ?????? ?????? ?????? 0??????
        		{
        			obj.setCellProperty("head", e.cell, "text", 1);
        			for(var i=0; i<this.dsReplyList.rowcount; i++) //dsBoard??????????????? ?????? ?????? ????????? ?????????
        			{
        				this.dsReplyList.setColumn(i, "isOk", 1); //isOk ????????? 0?????? ????????????
        			}
        		}
        		else if(obj.getCellValue(e.row, e.cell) == 1)
        		{
        			obj.setCellProperty("head", e.cell, "text", 0);
        			for(var i=0; i<this.dsReplyList.rowcount; i++)
        			{
        				this.dsReplyList.setColumn(i, "isOk", 0);
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_Update.addEventHandler("onclick",this.comm_Click,this);
            this.edt_name.addEventHandler("onchanged",this.edt_name_onchanged,this);
            this.grd_reply.addEventHandler("oncelldblclick",this.grd_reply_oncelldblclick,this);
            this.grd_reply.addEventHandler("onheadclick",this.grd_reply_onheadclick,this);
            this.btn_ReplyDelete.addEventHandler("onclick",this.comm_Click,this);
            this.btn_ReReplyInsert.addEventHandler("onclick",this.comm_Click,this);
            this.btn_ReplyInsert.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Delete.addEventHandler("onclick",this.comm_Click,this);
        };
        this.loadIncludeScript("BoardlistForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
