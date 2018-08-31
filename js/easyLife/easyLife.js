$(function() {
 		document.getElementById('easyLife').setAttribute("src","../images/4.png");
				var kw, type;
				var goodsArr = new Array();
				// 初始化
				init();
				//点击分类
				$(".j_type").click(function() {
					$(".mask-layer").show(); //屏幕
					$(".type-area").show(); //打开分类
				});
				//打开选择分类框
				$(".j-type-item").click(function() {
					type = $(this).attr("data-typeId"); //获取分类id给全局变量
					$(".j_type_txt").html($(this).text()); //给分类赋值
					if($(this).text().length <= 2) { //根据字符长短区分样式
						$(".j_type_txt").addClass("one-txt");
					} else {
						$(".j_type_txt").removeClass("one-txt");
					}
					getGoods(); //初始化商品
					hideMask(); //关闭分类框
				});
				//点击其他区域关闭分类框
				$(".mask-layer").click(function() {
					hideMask();
				});

				// 结算
				$(".j_settlement").click(function() {
					if($(this).hasClass("weui-btn_disabled")) { //如果是这种样式的就没有商品
						alert("请先选择商品");
					} else {
						window.location.href = "../easyLife/order-create.html";
					}
				});

				// 购物车
				$(".j_cart").click(function() {
					window.location.href = "../easyLife/cart.html";
				});

				// 商品数量加减
				$(".goods-list").delegate(".w-number-btn", "click", function() {
					var pro = $(this).attr("data-pro"); //— +
					var $item = $(this).parent().find("input"); //输入框
					var count = parseInt($item.val()); //数量
					// 最小值
					if(pro == 'minus' && count == 0) { //-
						return;
					}

					var temp = pro == 'plus' ? count + 1 : count - 1;
					$item.val(temp < 0 ? 0 : temp);
					updateCart($(this).attr("data-id"), temp);
				});
				//商品输入框填写
				$(".goods-list").delegate(".w-number-input", "blur", function() {
					var count = parseInt($(this).val());
					if(isNaN(count) || count < 0) {
						count = 0;
						$(this).val(0);
					}
					updateCart($(this).attr("data-id"), count);
				});
				//修改
				function updateCart(id, count) {
					var $goodsObj = $(".goods-item" + id);
					var goods = {};
					goods.id = $goodsObj.attr("data-id");
					goods.title = $goodsObj.attr("data-title");
					goods.price = $goodsObj.attr("data-price");
					goods.cover = $goodsObj.attr("data-cover");
					goods.yb = $goodsObj.attr("data-yb");
					goods.count = count;

					var index = -1;
					$.each(goodsArr, function(i, val) {
						if(goods.id == val.id) {
							index = i;
						}
					});

					// 从列表中删除当前记录
					if(count == 0) {
						goodsArr.splice(index, 1);
					} else {
						if(index == -1) {
							goodsArr.push(goods);
						} else {
							goodsArr.splice(index, 1, goods);
						}
					}
					// 添加购物车商品到缓存
					localStorage.setItem("cart", JSON.stringify(goodsArr));

					calc();

				}
				//计算总价金币数量
				function calc() {
					var totalMoney = 0,
						totalYb = 0,
						totalNum = 0;
					$.each(goodsArr, function(i, val) {
						totalMoney += val.count * val.price;
						totalYb += val.count * val.yb;
						totalNum += val.count;
					});
					$(".j_total_money").html("￥" + totalMoney); //总价格
					$(".j_total_yb").html(totalYb); //总金币
					$(".j_total_num").html(totalNum); //购物车数量
					if(goodsArr.length == 0) {
						$(".j_total_num").hide(); //隐藏购物车数量
						$(".j_settlement").addClass("weui-btn_disabled");
					} else {
						$(".j_total_num").show();
						$(".j_settlement").removeClass("weui-btn_disabled");
					}
				}

				function init() {

					// 默认获取第一个分类
					type = $(".type-item1").attr("data-typeId");
					$(".j_type_txt").html($(".type-item1").text());
					if($(".type-item1").text().length <= 2) {
						$(".j_type_txt").addClass("one-txt");
					} else {
						$(".j_type_txt").removeClass("one-txt");
					}

					// 购物车
					var goodsStr = localStorage.getItem("cart");
					goodsArr = goodsStr == null ? [] : JSON.parse(goodsStr);

					// 计算
					calc();
					// 获取商品
					getGoods();
				}
				//初始化商品
				function getGoods() {

				}
				//关闭分类框
				function hideMask() {
					$(".mask-layer").hide();
					$(".type-area").hide();
				}

			});