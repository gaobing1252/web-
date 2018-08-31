		function fenxiang(){
			alert("开发中");
		}
		$(function(){
					document.getElementById('video').setAttribute("src","../images/2.2.png");
				  partTimeJob(1);
				  $("#videos").hide();
				  $("#school_type1").hide();
				  $("#school_type2").hide();
				  
		
		})
		//视频
		function videos(type){
			$("#TimeJob").val("");
				$("#videoOn").html("");
				$("#videoOn").html($("#videoOn").html()+"<div style='width:100%; height:auto;float: left;'>"
				 +"<div style='z-index: 999; display: none; position: absolute; display: inline-block; width: 50%;margin-left:3%;padding-top: 20px;color:#ffffff'>"
				 +"name</div>"
				 +"<embed src='/i/helloworld.swf' type='application/x-shockwave-flash' style='float: left;width: 100%; height: 100%'>"	
					 +"</div>"
					 +"<div style='width:100%; height:20%;float: left;'>"
					 +"<div style='width:10%;float: left;margin-left:3%;padding-top:7px;'>"
					 +"<img src='../images/meirong.png'style='display: inline-block; width: 2em; height: 2em;'>"
						 +"</div>"
						 +"<div style='width:75%;float: left;'>"
						 +"<span style='float: left;margin-left:3%;padding-top:13px;'>name</span>"
						 +"<span style='float: right;padding-top:13px;font-size:13px;color:#666;'>10000次点击</span>"
						 +"</div>"
						 +"<div style='width:5%;float:right;margin-right:3%;padding-top:15px;'>"
						 +"<a onclick='fenxiang()'><img src='../images/Share.png'style='display: inline-block; width: 1em; height: 1em;'></a>"
						 +"</div>"
						 +"</div>");
			$("#videos").show();
			$("#partTimeJob").hide();
			$("#job").html("");
		}
		//兼职列表获取
		function partTimeJob(typeone){
			$("#TimeJob").val(1);
			var twoid;
			if(typeone == 1){
				 twoid = $('#twoid').val();
			}else if(typeone == 3){
					window.location.href = '../video/timeline.html';
				return;
			}else{
				 twoid = $('#twoids').val();
			}
			var page = "1";
			var rows = "10";
				 $("#job").html(""); 
		
				$("#job").html($("#job").html()+"<a onclick='job(1)'>"
					+"<div style='width: 20%; height:auto; float: left;text-align: center;'>"
					+"<img  src='../images/meirong.png' style='display: inline-block; width:2.5em; height:2.5em;margin-top:15%;'>"
						+"</div>"
						+"<div style='width: 50%; height:10%; float: left;'>"
						+"<div style='float: left;margin-top:5%;width: 100%;'>手机兼职</div>"
						+"<div style='float: left;margin-top:5%;width: 100%;font-size: 13px;color:#666;'>"
						+"<img  src='../images/date.png'style='display:inline-block;width:1.2em;height:1.2em;'>报名截至:2018-5-10</div>"
						+"</div>"
						+"<div style='width: 30%; height:10%; float: left;'>"
						+"<div style='float: right;margin-right:10%;margin-top:10%'><span style='color:red;'>100</span>/天</div>"
						+"<div style='float: right;margin-right:10%;margin-top:10%;font-size: 13px;color:#666;'>"
						+"<img  src='../images/location.png'style='display:inline-block;width:1em;height:1em;'>距离100km</div>"
						+"</div>"
						+"<div style='width:100%;border-top:1px solid #e5e5e5;float:left;margin-top:5%'></div>"
						+"</a>");
			
			$("#partTimeJob").show();
			$("#videos").hide();
			$("#videoOn").html("");
		}
		//详情
		function job(id){
			var school = '${school}';

			 $("#form1").html("");
			 $("#form1").html("<form id='form2' action='<%=path%>/wxController/getJobDetails.do'method='post'></form>");
			 $("#form1 form").html("<input type='text' name='id' value='"+id+"'/>");
			 $("#form1 form").append("<input type='text' name='school' value='"+school+"'/>");
			 $("#form2").submit();
		}
		//兼职二级菜单打开
		function getCondition(type){
			if(type == 1){
					$("#school_type1").html("");
						$("#school_type1").html($("#school_type1").html()+"<div style='width:100%; height:5%;text-align: center;'>"
						+"<a onclick='classify(1,1)'>"
						+"<span style='width:100%;padding-top: 5px;'>促销</span>"
						+"<div style='width:100%;border-top:1px solid #e5e5e5;float:left;margin-top:2%'></div><br>"
						+"</a>"
						+"</div>");
				if($("#school_type1").css("display")=="none"){
					$("#school_type1").show();
					}else{
					$("#school_type1").hide();
					}
					$("#school_type2").hide();
					$("#school_type3").hide();
					$("#school_type4").hide();
			}else if(type == 2){
				var twoid = $('#twoid').val();
				if($("#school_type2").css("display")=="none"){
					$("#school_type2").show();
						$("#school_type2").html("");
							$("#school_type2").html($("#school_type2").html()+"<div style='float: left;width:25%; height:8%;text-align: center;'class='clearfix'>"
							+"<a onclick='classify(1,1)'>"
							+"<span style='float: left;margin-left: 3%;width:96%;padding-top:10%;'>name</span>"
							+"</a>"
							+"</div>")
					}else{
					$("#school_type2").hide();
					}
					$("#school_type1").hide();
					$("#school_type3").hide();
					$("#school_type4").hide();
			}else if(type == 3){
					$("#school_type3").html("");
						$("#school_type3").html($("#school_type3").html()+"<div style='width:100%; height:5%;text-align: center;'>"
						+"<a onclick='classify("+0+","+type+")'>"
						+"<span style='float: left;width:100%;padding-top: 5px;'>不限</span>"
						+"<div style='width:100%;border-top:1px solid #e5e5e5;float:left;margin-top:2%'></div><br>"
						+"</a>"
						+"<a onclick='classify("+1+","+type+")'>"
						+"<span style='float: left;width:100%;padding-top: 5px;'>短期</span>"
						+"<div style='width:100%;border-top:1px solid #e5e5e5;float:left;margin-top:2%'></div><br>"
						+"</a>"
						+"<a onclick='classify("+2+","+type+")'>"
						+"<span style='float: left;width:100%;padding-top: 5px;'>长期</span>"
						+"<div style='width:100%;border-top:1px solid #e5e5e5;float:left;margin-top:2%'></div><br>"
						+"</a>"
						+"<a onclick='classify("+3+","+type+")'>"
						+"<span style='float: left;width:100%;padding-top: 5px;'>线上</span>"
						+"<div style='width:100%;border-top:1px solid #e5e5e5;float:left;margin-top:2%'></div><br>"
						+"</a>"
						+"<a onclick='classify("+4+","+type+")'>"
						+"<span style='float: left;width:100%;padding-top: 5px;'>实习</span>"
						+"<div style='width:100%;border-top:1px solid #e5e5e5;float:left;margin-top:2%'></div><br>"
						+"</a>"
						+"</div>");
						if($("#school_type3").css("display")=="none"){
							$("#school_type3").show();
							}else{
							$("#school_type3").hide();
							}
							$("#school_type2").hide();
							$("#school_type4").hide();
							$("#school_type1").hide();

			}else if(type == 4){
				$("#school_type4").html("");
				$("#school_type4").html($("#school_type4").html()+"<div style='width:100%; height:5%;text-align: center;'>"
				+"<a onclick='classify("+0+","+type+")'>"
				+"<span style='float: left;width:100%;padding-top: 5px;'>不限</span>"
				+"<div style='width:100%;border-top:1px solid #e5e5e5;float:left;margin-top:2%'></div><br>"
				+"</a>"
				+"<a onclick='classify("+1+","+type+")'>"
				+"<span style='float: left;width:100%;padding-top: 5px;'>次结</span>"
				+"<div style='width:100%;border-top:1px solid #e5e5e5;float:left;margin-top:2%'></div><br>"
				+"</a>"
				+"<a onclick='classify("+2+","+type+")'>"
				+"<span style='float: left;width:100%;padding-top: 5px;'>小时结</span>"
				+"<div style='width:100%;border-top:1px solid #e5e5e5;float:left;margin-top:2%'></div><br>"
				+"</a>"
				+"<a onclick='classify("+3+","+type+")'>"
				+"<span style='float: left;width:100%;padding-top: 5px;'>日结</span>"
				+"<div style='width:100%;border-top:1px solid #e5e5e5;float:left;margin-top:2%'></div><br>"
				+"</a>"
				+"<a onclick='classify("+4+","+type+")'>"
				+"<span style='float: left;width:100%;padding-top: 5px;'>月结</span>"
				+"<div style='width:100%;border-top:1px solid #e5e5e5;float:left;margin-top:2%'></div><br>"
				+"</a>"
				+"<a onclick='classify("+5+","+type+")'>"
				+"<span style='float: left;width:100%;padding-top: 5px;'>项目结</span>"
				+"<div style='width:100%;border-top:1px solid #e5e5e5;float:left;margin-top:2%'></div><br>"
				+"</a>"
				+"</div>");
				if($("#school_type4").css("display")=="none"){
					$("#school_type4").show();
					}else{
					$("#school_type4").hide();
					}
					$("#school_type2").hide();
					$("#school_type3").hide();
					$("#school_type1").hide();
			}
		}
		//兼职二级菜单-分类选择
		function classify(id,typeone){
			if(typeone == 1){
				$("#twoid").val(id);
			}else{
				$("#twoids").val(id);
			}
			partTimeJob(typeone);
			$("#school_type1").hide();
			$("#school_type2").hide();
			$("#school_type3").hide();
			$("#school_type4").hide();
		}
		function job(){
			window.location.href = '../video/jobdetails.html';
		}
