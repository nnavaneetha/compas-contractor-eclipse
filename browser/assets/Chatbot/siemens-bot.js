const PRODUCT_ASSIST = BOTNAMES.productinfobot;
const CROSS_ASSIST = BOTNAMES.crossbot;
const ORDER_ASSIST = BOTNAMES.orderbot;
const FEEDBACK_ASSIST = BOTNAMES.feedbackbot;
const GENERAL_CONVERSATION_ASSIST = BOTNAMES.masterbot;
const PRODUCT_SELECTOR = BOTNAMES.productselectorbot;
const THRESHOLD_RESPONSE_ITEMS_COUNT = 5;
var currentBot;
var allFilterAttributes = [];
var filterAttributesFromSession;
var productSelectorOptionsPrompt;
var newSearchForProductsOrCatalogPrompt, li_index;
var promptForOrderSearchOptions;
var productKeywords = ["products", "product", "product family", "catalog", "catalog no", "catalog number"];
var orderKeywords = ["order", "order status", "orders", "order details", "line", "order number", "order no"];
var crossKeywords = ["cross", "compas equivalent product", "siemens equivalent products", "competitor number", "cross products"];
var productOptionsButtonGroup = '<section>' +
    '<button id="btnCatalogSearch" class="btn-productOptions" onclick="onCatalogSearchClick()">Product Info</button>' +
    '<button id="btnProductSelectorSearch" class="btn-productOptions" onclick="onProductSelectorClick()">Product Selector</button>' +
    '</section>';

var prodselectoruserText = '';



var initialChatContent =
    '<div class="card">' +
    '<div class="card-block">' +
    '<div style="background-color:#f8f8f8;padding-top: 35px;height: 185px;">' +
    '<div style="font-size: 18px;color: #374b5a;font-weight: 700;margin-left:9%;text-align:center;">I am Sandy and ready to help!</div>' +
    '<div style="width:90%;text-align:center;padding-top:30px;margin:0 auto;">' +
    '<div style="width:15%;display:inline-block;">' +
    '<div class="home-circle-links" style="background-color:#6060f5;">' +
    '<i class="fa fa-question" style="font-size: 20px;line-height: 45px;color: #FFF;" aria-hidden="true"></i>' +
    '</div>' +
    '</div>' +
    '<div style="width: 80%;display: inline-block;vertical-align: middle;margin-left: 10px;text-align:left;"><span style="color:#6060f5;font-size: 15px;font-weight:bold;">Ask Sandy a Question</span>' +
    '<div class="home_helpartc_footer" style="margin-top:7px;"><input type="text" style="width:100%;" placeholder="For example, \'How to create a version quote?\'" value="" onkeydown="event.keyCode === 13 && openHelp(' + true + ')" /><span class="fa fa-search home_fa_search" style="cursor:pointer;" onclick="openHelp(' + true + ')"></span></div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div style="text-align: center;min-height: 100%;height: calc(100vh - 302px)">' +
    '<div class="home_desc_content_holder" onclick="onHelpLinkClick(' + "'CrossReference'" + ')">' +
    '<div style="width:15%;display:inline-block;">' +
    '<div class="home-circle-links" style="background-color: #eb780a;">' +
    '<img src="./images/logos/crt-icon.svg" width="17" height="50" style="vertical-align: middle;" />' +
    '</div>' +
    '</div>' +
    '<div class="home_description_holder"><span style="color:#eb780a;font-size:15px;">Cross Reference</span>' +
    '<div style="font-size:14px;">Type a product/catalog number and I can get you the siemens equivalent product(s).</div>' +
    '</div>' +
    '</div>' +
    '<div class="home_desc_content_holder" onclick="onHelpLinkClick(' + "'Order'" + ')" style="display:none;">' +
    '<div style="width:15%;display:inline-block;">' +

    '<div class="home-circle-links" style="background-color:green;" >' +
    '<i class="fa fa-clock-o" aria-hidden="true" style="font-size: 25px;line-height: 45px;color: #FFF;"></i>' +
    '</div>' +
    '</div>' +
    '<div class="home_description_holder"><span style="color:green;font-size:15px;">Order Status</span>' +
    '<div style="font-size:14px;">Give me an order no (or select from a list of recent orders) and I can get the status for you.</div>' +
    '</div>' +
    '</div>' +
    '<div class="home_desc_content_holder" onclick="onHelpLinkClick(' + "'CatalogSearch'" + ')">' +
    '<div style="width:15%;display:inline-block;">' +

    '<div class="home-circle-links" style="background-color:#af235f;">' +
    '<i class="fa fa-file-o" style="font-weight:bold;font-size: 20px;line-height: 45px;color: #FFF;" aria-hidden="true"></i>' +
    '</div>' +
    '</div>' +
    '<div class="home_description_holder"><span style="color:#af235f;font-size:15px;">Product Info</span>' +
    '<div style="font-size:14px;">Give me the catalog number and I will get the information you are looking for. </div>' +
    '</div>' +
    '</div>' +
    '<div class="home_desc_content_holder" onclick="onHelpLinkClick(' + "'ProductSelector'" + ')">' +
    '<div style="width:15%;display:inline-block;">' +
    '<div class="home-circle-links" style="background-color:#77641f;" >' +
    '<i class="fa fa-file-text-o" style="font-weight:bold;font-size: 20px;line-height: 45px;color: #FFF;" aria-hidden="true"></i>' +
    '</div>' +
    '</div>' +
    '<div class="home_description_holder"><span style="color:#77641f;font-size:15px;">Product Selector</span>' +
    '<div style="font-size:14px;">Tell me the product family name (and specifications) and I will get the information you are looking for.</div>' +
    '</div>' +
    '</div>' +
    '<div class="home_desc_content_holder" onclick="openLiveChat()" style="display:none;">' +
    '<div style="width:15%;display:inline-block;">' +
    '<div class="home-circle-links" style="background-color:indigo;" >' +
    '<i class="fa fa-commenting" style="font-weight:bold;font-size: 20px;line-height: 45px;color: #FFF;" aria-hidden="true"></i>' +
    '</div>' +
    '</div>' +
    '<div class="home_description_holder"><span style="color:indigo;font-size:15px;">Live Chat</span>' +
    '<div style="font-size:14px;">Make a realtime chat with our agents and get your questions clarified.</div>' +
    '</div>' +
    '</div>';

var lexSorryMessage = 'If you are not too sure on what to ask,please click any of the buttons below to quick start';
var lexGoodByeMessage = 'I am sorry, I could not understand what you are looking for. You can dial in to our customer help desk for further assistance. Good bye.';
var sorryText = '<p>I am not sure I understand your question. Please rephrase your question or you can use one of the below links: </p>' +
    '<div class="btn-group-vertical">' +
    '<div class="text-left">' +
    '<ul>' +
    '<li>' +
    '<a href="javascript:void(0)" id="btnCrossReference" onclick="onHelpLinkClick(' + "'CrossReference'" + ',' + true + ')" value="cross" >' +
    'Cross Reference' +
    '</a>' +
    '</li>' +
    '<li style="display:none;">' +
    '<a href="javascript:void(0)" id="btnOrderStatus" onclick="onHelpLinkClick(' + "'Order'" + ',' + true + ')" value="order">' +
    'Order Status' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a href="javascript:void(0)" id="btnProduct" onclick="onHelpLinkClick(' + "'CatalogSearch'" + ',' + true + ')" value="product">' +
    'Product Info' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a href="javascript:void(0)" id="btnProduct" onclick="onHelpLinkClick(' + "'ProductSelector'" + ',' + true + ')" value="product">' +
    'Product Selector' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a href="javascript:void(0)" id="btnHelpArticles" onclick="openHelp()" value="help">' +
    'Help Articles' +
    '</a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '<div style="display:none;">' +
    '<p>' +
    'Alternatively you can use this <a href="javascript:void(0)" onclick="openLiveChat()">link</a> for live chat' +
    '</p>' +
    '</div>';

var messageForProductNotFound = "Sorry, I could not find what you are looking for. How may I help you further";
var promptForTechnicalSpecification = "Please specify the technical specifications";

var autoSuggestionValues = []
var userId, token, userName, lexruntime, sessionAttributes;
var date = new Date();
var seconds = date.getSeconds();
var allAttributesFromService = [];
var openingMasterBot = 0;
var openingCrsRef = 0, openingOrderStatus = 0, openingproductHelp = 0,openingFeedbackHelp = 0;
var openingSearchContent = 0;
var soldToAccount = '', userSpecSoldToAccData, soldTOAccountList = [];
var checkCounter = 0;

$(document).ready(function () {
    initialize();
    $("#txtQuery").focus();
    $("#help-articles-header").addClass('hidden');
    $("ul.chat").append(initialChatContent);
    $("#messenger-content-area").scrollTop = $("#messenger-content-area").scrollHeight;
    $('div#messenger-body').addClass('in');
    $("#theme-header").addClass('hidden');
    $("#bot-change-list").addClass('hidden');
    //$("#btnPost").css('background-color', '#2c87a7');

    //removed footer for master bot
    $("#products_footer").addClass('hidden');

});


$('span.glyphicon-fullscreen').click(function (e) {
    if ($(document).width() >= 1200) {
        $('div#messenger').toggleClass('fullscreen');
        adjustContainerWidth();
        if ($('div#messenger-body').hasClass('in') === false) {
            $('div#messenger-body').addClass('in');
        }
    }
    else {
        $('span.glyphicon-menu-hamburger').click();
    }
});

$('span.glyphicon-menu-hamburger').click(function (e) {
    $('div#messenger').attr('style', '');
    if ($('div#messenger').hasClass("fullscreen")) {
        $('span.glyphicon-fullscreen').click();
    }
});

function initialize() {
    AWS.config.update({
        accessKeyId: '',
        secretAccessKey: '',
        region: "us-east-1"
    });
    currentBot = GENERAL_CONVERSATION_ASSIST;

    //DISABLED INPUT BOX FOR MASTERBOT

    // $('#txtQuery').attr('readonly', true).css('cursor', 'default');
    $("#btnPost").css({ 'background-color': '#ccc', 'cursor': 'default' });

    userId = getUserId();
    //token = compas_token;
    userName = getUserName();
    sessionAttributes = {};
    lexruntime = new AWS.LexRuntime();
    initializeAutosuggestionValues();
    productSelectorOptionsPrompt = 'Sure ' + userName + '. You can start your search by clicking one of the below options.' +
        productOptionsButtonGroup;

    newSearchForProductsOrCatalogPrompt = 'Sure ' + userName + '. What you want me to do for you?' + productOptionsButtonGroup;

    promptForOrderSearchOptions = 'Sure ' + userName + '. You can click one of the below options to start.' +
        '<section>' +
        '<button id="btnSearchByOrderNo" class="btn-productOptions" onclick="searchOrdersByOrderNo()">Search By OrderNo</button>' +
        '<button id="btnSearchByPONo" class="btn-productOptions" onclick="searchOrdersByPONo()">Search By PO No</button>' +
        '<button class="btn-productOptions" onclick="searchOrdersByQuoteName()">Search By QuoteName</button>' +
        '<button class="btn-productOptions" style="margin-left:3px;" onclick="searchOrdersByBomId()">Search By BomId</button>' +
        '</section>';

    getOrderStatusAutoSuggestions();
    getUserSpecificSoldToAccounts();
}

function getUserId() {
    var userId = "arxxbx";
    if (localStorage && localStorage.getItem('userId')) {
        return localStorage.getItem('userId');
    }
    return userId;
}


function getUserName() {
    var name = "Mike";
    if (localStorage && localStorage.getItem('name')) {
        return localStorage.getItem('name');
    }
    return name;
}

function getUserSpecificSoldToAccounts() {

    var payload = {
        applicationType: '200'
    };
    let url = global_environment + "/CPMServer/webservices/quoteService/getUserSpecSoldToAccounts";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
            $.ajax({
                url: url,
                dataType: "json",
                type: "POST",
                data: JSON.stringify(payload),
                async: false,
                headers: { "Content-Type": "application/json" },
                success: function (data) {
                    userSpecSoldToAccData = data;
                    soldTOAccountList = userSpecSoldToAccData.soldtoaccount;
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        }
    };
    xhttp.timeout = 5000;
    xhttp.open("GET", global_environment, true);
    xhttp.send();
}

function getOrderStatusAutoSuggestions() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
            $.ajax({
                url: global_environment + "/" + global_CSLinstance + "/order/getOrderSuggestions",
                dataType: "json",
                type: "GET",
                async: false,
                headers: { "Content-Type": "application/json" },
                success: function (data) {
                    orderStatusAutoSuggestVals = data;
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        }
    };
    xhttp.timeout = 5000;
    xhttp.open("GET", global_environment, true);
    xhttp.send();
}

function initializeAutosuggestionValues() {
    var result;
    var jsonObj = {};
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
            $.ajax({
                url: global_environment + "/" + global_CSLinstance + "/product/getFamilyNames",
                dataType: "json",
                type: "GET",
                headers: { "Content-Type": "application/json" },
                async: false,
                success: function (data) {
                    result = data;
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        }
    };
    xhttp.timeout = 5000;
    xhttp.open("GET", global_environment, true);
    xhttp.send();
    if (result && result.length > 0) {
        for (var i = 0; i < result.length; i++) {
            if (autoSuggestionValues.indexOf(result[i]["name"]) == -1) {
                autoSuggestionValues.push(result[i]["name"]);
                if (autoSuggestionValues.indexOf(result[i]["keyword"]) == -1) {
                    autoSuggestionValues.push(result[i]["keyword"]);
                }
            }
            var attNames = result[i]["attNames"];
            for (var j = 0; j < attNames.length; j++) {
                if (autoSuggestionValues.indexOf(attNames[j]) == -1) {
                    autoSuggestionValues.push(attNames[j]);
                }
            }
        }
    }
}


function getParametersForAWSLex(inputMessage, currentBot, sessionAttributes) {
    switch (currentBot) {
        case GENERAL_CONVERSATION_ASSIST:
            botAlias = masterBotAlias;
            break;

        case CROSS_ASSIST:
            botAlias = crossBotAlias;
            break;

        case ORDER_ASSIST:
            botAlias = orderBotAlias;
            break;

        case PRODUCT_ASSIST:
            botAlias = productInfoBotAlias;
            break;

        default:
            botAlias = productSelectorBotAlias;
            break;
    }

    sessionAttributes.userText = inputMessage;

    var params = {
        "botAlias": botAlias,
        "botName": currentBot,
        "inputText": inputMessage,
        "userId": seconds + userId,
        "sessionAttbs": sessionAttributes,
        "applicationType": "200"
    };
    return params;
}

function pushChat() {
    if (currentBot == null) {
        // document.getElementById('txtQuery').readOnly = true;
        currentBot = GENERAL_CONVERSATION_ASSIST;
    }

    if (currentBot === GENERAL_CONVERSATION_ASSIST) {
        openingMasterBot++;
        // setBotTheme(GENERAL_CONVERSATION_ASSIST);
    }

    var txtQuery = document.getElementById("txtQuery");
    if (txtQuery && txtQuery.value && txtQuery.value.trim().length > 0) {
        var message = txtQuery.value.trim();
        txtQuery.value = 'please wait...';
        txtQuery.locked = true;
        //sessionAttributes.token = token;
        sessionAttributes.userName = userName;
        //workaround for issues where BOt is not able to parse the catalognumber/crossnumber/ordernumber 
        var numberOnly = /^[0-9]+$/;
        sessionAttributes["userText"] = message;
        if (message.indexOf(' ') == -1) {
            if (currentBot == PRODUCT_ASSIST || currentBot == PRODUCT_SELECTOR) {
                sessionAttributes["CatalogNo"] = message;
            }
            else if (currentBot == BOTNAMES.crossbot) {
                sessionAttributes["CrossNo"] = message;
            }
            else if (currentBot == BOTNAMES.orderbot) {
                if (sessionAttributes["searchByType"] == "PONo") {
                    message = 'purchase number ' + message;
                }
                // else if (sessionAttributes["searchByType"] == "QuoteName") {
                //     message = 'quote ' + message;
                // }
                else if (sessionAttributes["searchByType"] == "OrderNo" && message.toString().length == 10) {
                    message = 'order ' + message;
                }

            }
        }
        var lexParameters = getParametersForAWSLex(message, currentBot, sessionAttributes);
        showRequest(message);
        postRequestToLex(lexParameters);
    }
    return false;
}

function setRequestTheme() {
    if (currentBot === GENERAL_CONVERSATION_ASSIST) {
        $(".botRequest").css("background-color", "#006386");
    }

    else if (currentBot === CROSS_ASSIST) {
        $(".botRequest").css("background-color", '#ffa510');
    }

    else if (currentBot === ORDER_ASSIST) {
        $(".botRequest").css('background-color', '#39cc43');
    }

    else if (currentBot === PRODUCT_ASSIST) {
        $(".botRequest").css('background-color', '#d03969');
    }
    else if (currentBot === PRODUCT_SELECTOR) {
        $(".botRequest").css('background-color', 'rgb(191, 156, 28)');
    }
    else if (currentBot === FEEDBACK_ASSIST) {
        $(".botRequest").css('background-color', '#009898');
    }
}

function showRequest(requestText) {
    var requestHtml = '<li class="left clearfix">' +
        '<div class="chat-body clearfix">' +
        '<div class="botRequest">' +
        requestText +
        '</div>' +
        '</div>' +
        '</li>';
    $("ul.chat").append(requestHtml);
    setRequestTheme();
    document.getElementById("messenger-content-area").scrollTop = document.getElementById("messenger-content-area").scrollHeight;
}

function showProductOrCatalogRequest(requestText) {
    var requestHtml = '<li class="right clearfix">' +
        '<div style="padding:5px;">' +
        '<img src="./images/logos/sandy.jpg" width="40px" height="40px" alt="sandy image" style="border-radius:50%;border:1px solid #999;">' +
        '</div>' +
        '<div class="chat-body clearfix">' +
        '<div class="response">' +
        '{0}' +
        '</div>' +
        '</div>' +
        '</li>';
    $("ul.chat").append(requestHtml.replace("{0}", requestText));
    // document.getElementById('txtQuery').readOnly = true;
    document.getElementById("messenger-content-area").scrollTop = document.getElementById("messenger-content-area").scrollHeight;
    setResponseTheme(currentBot);
}

var initialTableHTML;

var crossprodUserText, lastResponseDialogState = '', lastUserText;
function showResponse(lexResponse, isprodFilters) {

    setRequestTheme();
    $("#suggest-table tbody:last").html('');
    var isBOTDiverted = false, imgPath = '';

    if (lexResponse && lexResponse.dialogState == "Fulfilled") {
        if (lexResponse.message && (lexResponse.message.toLowerCase().indexOf('sorry') != -1 || lexResponse.message.indexOf(lexSorryMessage) != -1 || lexResponse.message.indexOf(sorryText) != -1)) {
            imgPath = "./images/logos/sandy-failure.jpg";
        }
        else if (lexResponse.message && (lexResponse.message.indexOf('I found more than') != -1 || lexResponse.message.indexOf('similar matching products found') != -1)) {
            imgPath = "./images/logos/sandy-multiple.jpg";
        }
        else if (lexResponse.message && (lexResponse.message.toLowerCase().indexOf('sorry') == -1 && lexResponse.message.indexOf(lexSorryMessage) == -1 && lexResponse.message.indexOf(sorryText) == -1 && lexResponse.message.indexOf('I found more than') == -1 && lexResponse.message.indexOf('similar matching products found' == -1))) {
            imgPath = "./images/logos/sandy.jpg";
        }
    }
    else {
        imgPath = "./images/logos/sandy-main.jpg";
    }

    var randomNo = Math.floor(Math.random() * 1000);
    var responseno = 'resid_' + randomNo;

    var responseHtml = '<li class="right clearfix">' +
        '<div style="padding:5px;">' +
        '<img src="' + imgPath + '" width="40px" height="40px" alt="sandy image" style="border-radius:50%;border:1px solid #999;">' +
        '</div>' +
        '<div class="chat-body clearfix">' +
        '<div class="response">' +
        '{0}' +
        '</div>' +
        '</div>' +
        '<div class="rate_res_holder">' +
        '<div class="dislikewrapper">' +
        '<i class="fa fa-thumbs-down dislikeBtn" title="Dislike" aria-hidden="true" id="dislike_' + responseno + '"></i>' +
        '</div>' +
        '<div class="likewrapper">' +
        '<i class="fa fa-thumbs-up likeBtn" aria-hidden="true" title="Like" id="like_' + responseno + '"></i>' +
        '</div>' +
        '</div>' +
        '</li>';

    if (lexResponse) {
        lastResponseDialogState = lexResponse.dialogState;
        lastUserText = lexResponse.sessionAttributes ? (lexResponse.sessionAttributes.userText ? lexResponse.sessionAttributes.userText : '') : '';
        if (lexResponse.dialogState === 'ConfirmIntent') {
            // document.getElementById('txtQuery').readOnly = true;
        }
        else {
            document.getElementById('txtQuery').readOnly = false;
        }
        if (lexResponse.message) {

            if (currentBot == PRODUCT_SELECTOR && lexResponse.sessionAttributes["productAttributeNameValuePairs"]) {
                filterAttributesFromSession = [];
                filterAttributesFromSession.push(lexResponse.sessionAttributes["productAttributeNameValuePairs"]);
            }

            if (!lexruntime.intentName && (lexResponse.message.indexOf(lexSorryMessage) == 0) || lexResponse.message.indexOf(lexGoodByeMessage) == 0) {

                if (isprodFilters != 'prod-filters-view')

                    checkForWorkAround(responseHtml, lexResponse.sessionAttributes);

            }
            else {
                if (lexResponse.message.indexOf('carousel') > -1) {
                    var msg_target = lexResponse.message.substring(lexResponse.message.indexOf('<li data-target='), lexResponse.message.indexOf('</li>'));
                    var targetId = $(msg_target).attr('data-target');
                    lexResponse.message = appendCarouselSliderBtns(targetId, lexResponse.sessionAttributes.productsLength) + lexResponse.message;

                }
                if (isprodFilters != 'prod-filters-view')
                    $("ul.chat").append(responseHtml.replace("{0}", lexResponse.message));
            }

        }



        if (lexResponse.dialogState !== 'ConfirmIntent' && currentBot === ORDER_ASSIST && (lexResponse.message.indexOf("I found the below details for order") !== -1 || lexResponse.message.indexOf("I found the below details for cfn") !== -1)) {
            initialTableHTML = ' <p>Hope the Information provided is helpful. I can help you with more information like ...</p>' +
                '<table class="table suggest-table {11}"  style="margin-bottom:5px !important">' +
                '<tbody>' +
                ` {0}
                </tbody>
                 </table>
                 <span class="{12}" onclick="onclicksuggestmore(this)" style="color:#337ab7;display:block;cursor:pointer">more..</span>`;

            tableHtml = initialTableHTML;

            Array.prototype.contains = function (element) {
                return this.indexOf(element) > -1;
            };
            var randomNumber = Math.floor(Math.random() * 1000);
            var randomNoForTable = 'suggest_' + randomNumber;

            var randomForMoreBtn = 'suggestmore_' + randomNumber;
            tableHtml = tableHtml.replace("{11}", randomNoForTable);
            tableHtml = tableHtml.replace("{12}", randomForMoreBtn);


            if (orderStatusAutoSuggestVals.contains("Item Summary") == false) {
                orderStatusAutoSuggestVals.unshift('Item Summary');

            }


            if (orderStatusAutoSuggestVals.contains("Item Summary")) {
                for (var i = 0; i < 1; i++) {
                    var tr = '<tr><td style=cursor:pointer;"><a onclick="showLineItems(\'' + orderStatusAutoSuggestVals[i] + '\')">{21}</a></td></tr>';
                    tr = tr.replace("{21}", orderStatusAutoSuggestVals[i]);
                    tableHtml = tableHtml.replace("{0}", tr);
                }
            }

            var responseSuggest = '<li class="right clearfix">' +
                '<div style="padding:5px;">' +
                '<img src="./images/logos/sandy.jpg" width="40px" height="40px" alt="sandy image" style="border-radius:50%;border:1px solid #999;">' +
                '</div>' +
                '<div class="chat-body clearfix">' +
                '<div class="response">' +
                '{0}' +
                '</div>' +
                '</div>' +
                '</li>';

            $("ul.chat").append(responseSuggest.replace("{0}", tableHtml));
        }

        //[id*="teststring"] will select id's which contains text "teststring"
        $("[id*=" + responseno + "]").data('lexres', lexResponse);
        $("[id*=" + responseno + "]").click(function () {
            var thisEle = $(this);
            if (thisEle.hasClass('ratedRes')) {
                //if like/dislike button already has corresponsing classed applied when clicking
                return;
            }
            else if (thisEle.attr('id') === 'like_' + responseno) {
                //if like btn clicked, corresponsing response dislike button red color should be removed
                $("#dislike_" + responseno).removeClass('ratedRes');
            }
            else {
                //if dislike btn clicked, corresponsing response like button green color should be removed
                $("#like_" + responseno).removeClass('ratedRes');
            }
            sendUserFeedback(this, $("[id*=" + responseno + "]").data("lexres"));
        });
    }
    else {
        document.getElementById('txtQuery').readOnly = false;
    }
    // var promptForTechnicalSpecification = "Please specify the technical specifications";
    // if (currentBot == "ProductAssist_Dev" && lexResponse.intentName != "GeneralConversation" && sessionAttributes["isChatWindowEnabled"] == "false" && lexResponse.message.indexOf("onAttributeNameLinkClick") == -1) {

    //     document.getElementById('txtQuery').readOnly = true;
    // }
    // if (currentBot == BOTNAMES.crossbot && sessionAttributes["isChatWindowEnabled"] == "false" && lexResponse.intentName != "GeneralConversation") {
    //     document.getElementById('txtQuery').readOnly = true;
    // }
    document.getElementById("messenger-content-area").scrollTop = document.getElementById("messenger-content-area").scrollHeight;

    setResponseTheme(currentBot);
}

function sendUserFeedback(thisElement, lexres) {
    var likeVal = $(thisElement).attr('title') == 'Like' ? 1 : 0;
    $(thisElement).addClass('ratedRes');
    var userQuery = lexres.sessionAttributes ? (lexres.sessionAttributes.userText ? lexres.sessionAttributes.userText : '') : '';
    var payload = {
        "applicationType": "CLOUD",
        "userId": userId,
        "like": likeVal,
        "botName": currentBot,
        "intentName": lexres.intentName,
        "comments": "",
        "query": userQuery,
        "response": lexres.message
    }

    $.ajax({
        url: global_environment + "/" + global_CSLinstance + "/bot/postLikeDislike",
        dataType: "json",
        type: "POST",
        data: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        success: function (data) {

        },
        error: function (xhr, status, error) {
        }
    })
}
function onclicksuggestmore(thisElement) {
    var thisElementRandomNo = thisElement.className.substring((thisElement.className.indexOf('_') + 1), thisElement.className.length);
    for (var i = 1; i < orderStatusAutoSuggestVals.length; i++) {
        $('.suggest_' + thisElementRandomNo + " tbody").append('<tr><td style="cursor:pointer;"><a onclick="onLineOrOrderAttributeLinkClick(\'' + orderStatusAutoSuggestVals[i] + '\')">' + orderStatusAutoSuggestVals[i] + '</a></td></tr>');
    }
    $('.suggestmore_' + thisElementRandomNo).remove();
}



function setResponseTheme(currentBot) {
    if (currentBot === GENERAL_CONVERSATION_ASSIST) {
        $(".response").css('border', "1px solid #1b97c3");
    }
    else if (currentBot === CROSS_ASSIST) {
        $(".response").css('border', '1px solid #ffd995');
        $(".response").css('background-color', '#fffcf5');
    }

    else if (currentBot === ORDER_ASSIST) {
        $(".response").css('border', ' 1px solid #93dd8b').css('background-color', ' #f8fff7');
        $("#txtQuery").autocomplete({
            source: orderStatusAutoSuggestVals,
            minLength: 0,
            select: function (event, ui) {
                $("#txtQuery").val(ui.item.value);
            },
            position: {
                my: "left bottom",
                at: "left top",
                collision: "none"
            },
            classes: {
                "ui-autocomplete": "chatbot-specific-auto-properties"
            }
        });
    }

    else if (currentBot === PRODUCT_ASSIST) {
        $(".response").css('border', ' 1px solid #ffc0d4').css('background-color', ' #fff7fa');
    }

    else if (currentBot === PRODUCT_SELECTOR) {
        $(".response").css('border', '1px solid #eac43a').css('background-color', '#f7f1dd');
    }

    else if (currentBot === FEEDBACK_ASSIST) {
        $(".response").css('border', '1px solid #0b8a8a').css('background-color', 'rgba(226, 247, 247, 0.27)');
    }

}

function postWithUserText(userVal, parameters) {
    parameters.inputText = userVal;
    postRequestToLex(parameters, false, false);
}

function postRequestToLex(parameters, isprodFilters) {
    parameters.currentDialogState = lastResponseDialogState;
    parameters.lastUserText = lastUserText;
    $("div#messenger-loader-area").removeClass("hidden");
    document.getElementById("messenger-content-area").scrollTop = document.getElementById("messenger-content-area").scrollHeight;
    console.log(parameters);
    $.ajax({
        url: global_environment + "/" + global_CSLinstance + "/bot/postText",
        hideOverlay: false,
        dataType: "json",
        type: "POST",
        data: JSON.stringify(parameters),
        headers: { "Content-Type": "application/json" },
        success: function (data) {
            $("div#messenger-loader-area").addClass("hidden");
            sessionAttributes = data.sessionAttributes;
            showResponse(data, isprodFilters);
            document.getElementById('txtQuery').value = '';
            document.getElementById('txtQuery').locked = false;
            document.getElementById('txtQuery').focus();
        },
        error: function (xhr, status, error) {
            $("div#messenger-loader-area").addClass("hidden");
            console.log(error);
            document.getElementById('txtQuery').value = '';
            document.getElementById('txtQuery').locked = false;
            document.getElementById('txtQuery').focus();
        }
    });



}

var initialLinkChatContent = '<li>' +
    '<div id="homeLinkInitialChatContent">Click on <i class="fa fa-th" aria-hidden="true"></i> button above to switch between services.</div>' +
    '</div>' +
    '</li>';

function onHelpLinkClick(helpText, isBotChanged) {
    sessionAttributes = {};
    //added footer if chat context changed to other bots
    $("#products_footer").removeClass('hidden');
    // $(".home_helpartc_footer").addClass('hidden');

    $('#txtQuery').attr("readonly", false).css('cursor', 'auto');
    $("#btnPost").css('cursor', 'pointer');
    var requestText = '';
    sessionAttributes.userName = userName;
    //sessionAttributes.token = token;
    unbindAutoSuggestion();
    switch (helpText) {
        case "CatalogSearch":
            requestText = 'Catalog Search';
            currentBot = PRODUCT_ASSIST;
            allFilterAttributes.length = 0;
            allAttributesFromService.length = 0;
            openingproductHelp = isBotChanged ? 0 : 1;
            onCatalogSearchClick();
            break;
        case "ProductSelector":
            requestText = 'Product selector';
            currentBot = PRODUCT_SELECTOR;
            allFilterAttributes.length = 0;
            allAttributesFromService.length = 0;
            openingproductHelp = isBotChanged ? 0 : 1;
            onProductSelectorClick();
            bindAutoSuggestion();
            break;
        case "CrossReference":
            currentBot = CROSS_ASSIST;
            requestText = 'Get competitor equivalent products';
            openingCrsRef = isBotChanged ? 0 : 1;
            break;
        case "Order":
            requestText = 'My recent orders';
            currentBot = ORDER_ASSIST;
            openingOrderStatus = isBotChanged ? 0 : 1;
            break;
        default:
            requestText = '';
            break;
    }
    setBotTheme(currentBot, requestText);
    setRequestTheme();
    if (requestText == '' && currentBot !== BOTNAMES.feedbackbot) {
        showRequest('Sorry !! please try again after sometime');
    }
    else {
        console.log(currentBot);
        if (currentBot == BOTNAMES.crossbot) {
            //showHelpRequest(requestText);
            var lexParameters = getParametersForAWSLex(requestText, currentBot, sessionAttributes);
            postRequestToLex(lexParameters);
        }
        else if (currentBot == BOTNAMES.orderbot) {
            requestText = promptForOrderSearchOptions;
            showProductOrCatalogRequest(requestText);
        }
    }
}


function onOrderLinkClick(order) {
    showRequest(order);
    console.log(currentBot);
    console.log(sessionAttributes);
    console.log(order.toString());
    var lexParameters = getParametersForAWSLex(order.toString(), currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}

function onConfirmationLinkClick(selectedOption) {
    var confirmText = selectedOption == 1 ? "Yes" : "No";
    var lexParameters = getParametersForAWSLex(confirmText, currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}

function onFamilyLinkClick(familyName) {
    showRequest(familyName);
    var lexParameters = getParametersForAWSLex(familyName.toString(), currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}

function onAttributeNameLinkClick(attributeName) {
    $("#txtQuery").val(attributeName.toString());
}

function onAttributeValueLinkClick(attributeValue) {
    showRequest(attributeValue);
    sessionAttributes.clickedAttributeValue = attributeValue;
    var lexParameters = getParametersForAWSLex(attributeValue.toString(), currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}

function showLineItems() {
    var attributeValue = 'my line items';
    showRequest(attributeValue);
    sessionAttributes.clickedAttributeValue = attributeValue;
    var lexParameters = getParametersForAWSLex(attributeValue.toString(), currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}

function onMaterialClick(material) {
    var attributeValue = 'line items with material ' + material;
    showRequest(attributeValue);
    sessionAttributes.clickedAttributeValue = attributeValue;
    var lexParameters = getParametersForAWSLex(attributeValue.toString(), currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}

function onLineOrOrderAttributeLinkClick(attributeName) {
    if (attributeName.indexOf("LineItem") > -1) {
        attributeName = attributeName.substring(9, attributeName.length);
    }
    showRequest(attributeName);
    var lexParameters = getParametersForAWSLex(attributeName, currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}

function onLineNumberLinkClick(lineNumber) {
    showRequest(lineNumber);
    var lexParameters = getParametersForAWSLex(lineNumber.toString(), currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}

function clearChat() {
    var outcome = confirm("Do you really want to clear this chat ?");
    if (outcome == true) {
        $('ul.chat').html('');
        $("ul.chat").append(initialChatContent);
        date = new Date();
        seconds = date.getSeconds();
        sessionAttributes = {};
        document.getElementById('txtQuery').readOnly = false;
        document.getElementById("messenger-content-area").scrollTop = document.getElementById("messenger-content-area").scrollHeight;
    }
}

function adjustContainerWidth() {
    if ($('div#messenger').hasClass('fullscreen')) {
        $('div[bot-data="image"]').removeClass('col-md-4');
        $('div[bot-data="image"]').addClass('col-md-2');
        $('div[bot-data="text"]').removeClass('col-md-8');
        $('div[bot-data="text"]').addClass('col-md-10');
    }
    else {
        $('div[bot-data="image"]').removeClass('col-md-2');
        $('div[bot-data="image"]').addClass('col-md-4');
        $('div[bot-data="text"]').removeClass('col-md-10');
        $('div[bot-data="text"]').addClass('col-md-8');
    }
}

function bindAutoSuggestion() {
    $("#txtQuery").autocomplete({
        source: autoSuggestionValues,
        minLength: 0,
        select: function (event, ui) {
            $("#txtQuery").val(ui.item.value);
        },
        position: {
            my: "left bottom",
            at: "left top",
            collision: "none"
        },
        classes: {
            "ui-autocomplete": "chatbot-specific-auto-properties"
        }
    });
}

function getAllAttributeNameValueForProductFamily(familyName) {
    allAttributesFromService = [];
    var result;
    var attributes;
    $.ajax({
        url: global_environment + "/" + global_CSLinstance + "/product/getAttbs?tenantName=" + familyName,
        dataType: "json",
        type: "GET",
        headers: { "Content-Type": "application/json" },
        async: false,
        success: function (data) {
            result = data;
            if (result) {
                attributes = result["attributes"];
                if (attributes.length > 0) {
                    for (var i = 0; i < attributes.length; i++) {
                        var attributeObj = {};
                        attributeObj["Name"] = attributes[i]["attrName"];
                        attributeObj["DisplayName"] = attributes[i]["displayName"];
                        attributeObj["Values"] = attributes[i]["attrValues"];
                        allAttributesFromService.push(attributeObj);
                    }
                }
            }
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}
var currentTenantName;
function showFiltersWithDropdown(familyName) {
    currentTenantName = familyName;
    $("div#messenger-loader-area").removeClass("hidden");
    var previousSelectedFilters;
    var attrName;
    var attrVal;
    var displayName;
    var randomNo = Math.floor(Math.random() * 1000);
    var btnViewId = 'btnView_' + randomNo;
    var btnResetId = 'btnReset_' + randomNo;
    var divContainerId = 'divFilter_' + randomNo;
    var filterPanel = '<div class="row">' +
        '<div class="container col-xs-8 col-md-8 filterResponse" id="' + divContainerId + '">' +
        '<p>Choose attribute values from the filter</p>' +
        '{0}' +
        '<div>' +
        '<button class="btn-primary-spacing btn-primary" id="' + btnResetId + '" onclick="resetAttributeDropdowns(\'' + randomNo + '\')" title="Click this button to reset the drop down values">Reset</button>' + '<span> </span>' +
        '<button class="btn-primary-spacing btn-primary" id="' + btnViewId + '" onclick="getAllFiters(\'' + randomNo + '\')" title="Select values from drop down and click this button to filter further." disabled>View</button>' +
        '</div>' +
        '</div>';
    var dropDownHtml = '';
    //getAllAttributeNameValueForProductFamily(familyName);
    allAttributesFromService = [];
    var result;
    var attributes;


    $.ajax({
        url: global_environment + "/" + global_CSLinstance + "/product/getAttbs?tenantName=" + familyName,
        dataType: "json",
        type: "GET",
        headers: { "Content-Type": "application/json" },
        async: false,
        success: function (data) {
            result = data;
            if (result) {
                attributes = result["attributes"];
                if (attributes.length > 0) {
                    for (var i = 0; i < attributes.length; i++) {
                        var attributeObj = {};
                        attributeObj["Name"] = attributes[i]["attrName"];
                        attributeObj["DisplayName"] = attributes[i]["displayName"];
                        attributeObj["Values"] = attributes[i]["attrValues"];
                        allAttributesFromService.push(attributeObj);
                    }
                    if (allAttributesFromService.length > 0) {
                        var dropDownId;
                        var dropDownIdArray = [];
                        for (var i = 0; i < allAttributesFromService.length; i++) {
                            displayName = allAttributesFromService[i]["DisplayName"]
                            dropDownId = 'btn_' + allAttributesFromService[i]["Name"] + '_' + randomNo;
                            var attributeDropDownObject = {};
                            attributeDropDownObject["attrName"] = allAttributesFromService[i]["Name"];
                            attributeDropDownObject["dropDownId"] = dropDownId;
                            dropDownIdArray.push(attributeDropDownObject);
                            dropDownHtml = dropDownHtml + '<div class="dropdown">' +
                                '<button class="btn btn-primary dropdown-toggle col-xs-8 col-md-8" style="white-space: normal;" id="' + dropDownId + '" type="button" data-toggle="dropdown">' + allAttributesFromService[i]["Name"] +
                                '<span class="caret allignCaret"></span></button>' +
                                '<ul style="top:-25px;" class="dropdown-menu scrollable-menu pull-right" aria-labelledby="' + dropDownId + '">' +
                                '{0}' +
                                '</ul>' +
                                '</div>' + '&nbsp;';

                            var valHtm = '';

                            for (var j = 0; j < allAttributesFromService[i]["Values"].length; j++) {
                                attrVal = allAttributesFromService[i]["Values"][j];
                                attrName = allAttributesFromService[i]["Name"];
                                valHtm = valHtm + '<li>' +
                                    '<a class="allignValue" tabindex="-1" href="javascript:void(0)" onclick="attrClick(\'' + dropDownId + '\',\'' + attrName + '\', \'' + attrVal + '\',\'' + randomNo + '\', \'' + displayName + '\' )">' +
                                    allAttributesFromService[i]["Values"][j] +
                                    '</a>' +
                                    '</li>';
                            }
                            dropDownHtml = dropDownHtml.replace('{0}', valHtm);
                        }

                    }
                    filterPanel = filterPanel.replace('{0}', dropDownHtml);
                    $("ul.chat").append(filterPanel);
                    $("div#messenger-loader-area").addClass("hidden");
                    if (filterAttributesFromSession.length > 0) {
                        previousSelectedFilters = filterAttributesFromSession[0];
                        var jsonObj = JSON.parse(previousSelectedFilters);
                        setDropdownToPreviousSelection(jsonObj, dropDownIdArray);
                    }
                    if (allFilterAttributes.length > 0) {
                        $('#' + btnViewId).removeAttr('disabled');
                    }
                    document.getElementById("messenger-content-area").scrollTop = document.getElementById("messenger-content-area").scrollHeight;
                }
            }
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}

function setDropdownToPreviousSelection(previousFilterObj, dropDownIdArray) {
    var attributeObj;
    var selectedAttributeNameValue;
    var newSelectedAttribute = [];
    var allAttributeNames = [];
    var allKeys = Object.keys(previousFilterObj);
    for (var i = 0; i < allKeys.length; i++) {
        for (var j = 0; j < dropDownIdArray.length; j++) {
            if (allKeys[i] == dropDownIdArray[j]["attrName"]) {
                attributeObj = {};
                selectedAttributeNameValue = dropDownIdArray[j]["attrName"] + ' ' + previousFilterObj[dropDownIdArray[j]["attrName"]];
                attributeObj["attrName"] = dropDownIdArray[j]["attrName"];
                attributeObj["attrValue"] = previousFilterObj[dropDownIdArray[j]["attrName"]];
                allFilterAttributes.push(attributeObj);
                var btnId = '#' + dropDownIdArray[j]["dropDownId"];
                $(btnId).html(selectedAttributeNameValue + ' ' + '<span class="caret allignCaret"></span>');
                break;
            }
        }
    }
}
function attrClick(btnId, attrName, attrVal, randomNumber, displayName) {

    var selectedAttributeNameValue = attrName + ' ' + attrVal;
    //console.log(selectedAttributeNameValue);
    $('#' + btnId).html(selectedAttributeNameValue + ' ' + '<span class="caret allignCaret"></span>');
    var attributeObj = {};
    var newSelectedAttribute = [];
    var allAttributeNames = [];
    if (allFilterAttributes.length > 0) {
        for (var i = 0; i < allFilterAttributes.length; i++) {
            allAttributeNames.push(allFilterAttributes[i]["attrName"]);
        }
        if (allAttributeNames.indexOf(attrName) > -1) {
            for (var i = 0; i < allFilterAttributes.length; i++) {
                if (allFilterAttributes[i]["attrName"] == attrName) {
                    allFilterAttributes[i]["attrValue"] = attrVal;
                }
            }
        }
        else {
            var attributeObj = {};
            attributeObj["attrName"] = attrName;
            attributeObj["attrValue"] = attrVal;
            newSelectedAttribute.push(attributeObj);
            //console.log(newSelectedAttribute);
        }
    }
    //on first time selection of any attribute dropdown
    else {
        attributeObj["attrName"] = attrName;
        attributeObj["attrValue"] = attrVal;
        allFilterAttributes.push(attributeObj);
    }
    //push all the newly selected attribute name value into global array 'allFilterAttributes'
    if (newSelectedAttribute.length > 0) {
        for (var i = 0; i < newSelectedAttribute.length; i++) {
            allFilterAttributes.push(newSelectedAttribute[i]);
        }
    }
    if (allFilterAttributes.length > 0) {
        $('#btnView_' + randomNumber).removeAttr('disabled');
    }
}

function getOnlySpecificAttr(data, callback) {
    $.ajax({
        url: global_environment + "/refx/webservices/gSearch/fetchSelectorAttributeValues",
        dataType: "json",
        type: "POST",
        data: JSON.stringify({ "applicationType": "Cloud", "tenantName": currentTenantName }),
        headers: { "Content-Type": "application/json" },
        success: function (attrData) {
            $("div#messenger-loader-area").addClass("hidden");
            if (attrData && attrData.attributes && attrData.attributes.length) {
                var filteredData = [], obj = {}, specificobj;
                var keysdata = Object.keys(data.attributes[0]);

                for (k = 0; k < data.attributes.length; k++) {


                    for (i = 0; i < attrData.attributes.length; i++) {
                        specificobj = _.pick(data.attributes[k], attrData.attributes[i].attrName);
                        specificobj['dispHeadName' + attrData.attributes[i].attrName] = attrData.attributes[i].displayName;
                        obj = _.extend(obj, specificobj);

                    };
                    filteredData.push(_.clone(obj));
                }

                callback(filteredData, data.attributes);
            }
        },
        error: function (error) {
            $("div#messenger-loader-area").addClass("hidden");

        }
    });
}

function constructNotFoundTemplate() {
    var notFoundTemplate = `<p>I found <span><b>0</b></span> matches, you can refine your search by clicking on the<strong> Filter </strong>button below or click the<strong> New Search </strong>button if you want to start a fresh search with new specifications.</p>` +
        '</br>' +
        '<div style="text-align:center;"><button id="btnFilter" class="btn-primary" style="border-radius: 20px;" onclick="showFiltersWithDropdown(\'' + currentTenantName + '\')">Filter</button>' +
        '<span> </span><button id="btnNewSearch" class="btn-primary" style="border-radius: 20px;" onclick="startNewSearch()">New Search</button>' +
        '</div>';


    var responseHtml = '<li class="right clearfix">' +
        '<div style="padding:5px;">' +
        '<img src="./images/logos/sandy-failure.jpg" width="40px" height="40px" alt="sandy image" style="border-radius:50%;border:1px solid #999;">' +
        '</div>' +
        '<div class="chat-body clearfix">' +
        '<div class="response">' +
        '{0}' +
        '</div>' +
        '</div>' +
        '</li>';

    $("ul.chat").append(responseHtml.replace("{0}", notFoundTemplate));
    setResponseTheme(currentBot);
}
function getAllFiters(randomNumber) {
    var selectedAttribute = [];
    var payload = {
        "applicationType": "CLOUD", "tenantName": currentTenantName, "attributes": {}
    }
    if (allFilterAttributes.length > 0) {
        for (var i = 0; i < allFilterAttributes.length; i++) {
            selectedAttribute.push(allFilterAttributes[i]["attrName"] + ' ' + allFilterAttributes[i]["attrValue"]);
            payload.attributes[allFilterAttributes[i]["attrName"]] = allFilterAttributes[i]["attrValue"];
        }
        var ListAttr = allFilterAttributes;
        var filterStr = selectedAttribute.join();
        resetAttributeDropdowns(randomNumber);
        if (sessionAttributes.productAttributeNameValuePairs) {
            sessionAttributes.productAttributeNameValuePairs = null;
        }
        var lexParameters = getParametersForAWSLex(filterStr, currentBot, sessionAttributes);
        showRequest(filterStr);
        postRequestToLex(lexParameters, 'prod-filters-view');
        $("div#messenger-loader-area").removeClass("hidden");
        document.getElementById("messenger-content-area").scrollTop = document.getElementById("messenger-content-area").scrollHeight;

        $.ajax({
            url: global_environment + "/refx/webservices/gSearch/filterAttributes",
            dataType: "json",
            type: "POST",
            data: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
            success: function (data) {
                if (data && data.attributes && data.attributes.length) {
                    if (data.attributes.length == 1) {
                        getOnlySpecificAttr(data, constructTemplate);
                    }
                    else {
                        getOnlySpecificAttr(data, constructCarouselTemplate);
                    }
                }
                else {
                    constructNotFoundTemplate();
                    $("div#messenger-loader-area").addClass("hidden");
                }
            },
            error: function (xhr, status, error) {
                constructNotFoundTemplate();
                $("div#messenger-loader-area").addClass("hidden");
                console.log(error);
            }
        });


    }
    //allFilterAttributes.length=0;
    allAttributesFromService.length = 0;
}

function slide_carousel(slide_direction, target, num, totalItems) {
    var carousel_target = target + (num || '');
    var idd = carousel_target.replace('#', '');
    $(carousel_target).carousel(slide_direction);

    $(carousel_target).on('slid.bs.carousel', function () {
        currentIndex = $('#' + idd + ' div.active').index() + 1;
        $('span.showcount' + idd).html('' + currentIndex + '/' + totalItems + '');
    });
}


function appendCarouselSliderBtns(target_id, totalItems) {
    var idd = target_id.replace('#', '');
    var template = '<div>I found ' + totalItems + ' matching products.</div>' +
        `<div class='carousel-btn-grp'>` +
        '<button class="btn btn-primary" onclick="slide_carousel(' + "'prev'" + ',' + "'" + target_id + "'" + ',' + null + ',' + totalItems + ')">Prev</button>' +
        '<span class="showcount' + idd + '" style="margin-right:20px;">1/' + totalItems + '</span>' +
        '<button class="btn btn-primary" onclick="slide_carousel(' + "'next'" + ',' + "'" + target_id + "'" + ',' + null + ',' + totalItems + ')">Next</button>' +
        `</div>`;
    return template;
}

function constructCarouselTemplate(response, actualData) {
    var randomTarget = Math.floor(Math.random() * 1000);
    var responseHtml = '<li class="right clearfix">' +
        '<div style="padding:5px;">' +
        '<img src="./images/logos/sandy.jpg" width="40px" height="40px" alt="sandy image" style="border-radius:50%;border:1px solid #999;">' +
        '</div>' +
        '<div class="chat-body clearfix">' +
        '<div class="response">' +
        '<div>I found ' + response.length + ' matching products.</div>' +
        `<div class='carousel-btn-grp'>` +
        '<button class="btn btn-primary" onclick="slide_carousel(' + "'prev'" + ',' + "'#carousel_'" + ',' + randomTarget + ',' + response.length + ')">Prev</button>' +
        '<span class="showcountcarousel_' + randomTarget + '"  style="margin-right:20px;">1/' + response.length + '</span>' +
        '<button class="btn btn-primary" onclick="slide_carousel(' + "'next'" + ',' + "'#carousel_'" + ',' + randomTarget + ',' + response.length + ')">Next</button>' +
        `</div>` +
        '{3}' +
        '</div>' +
        '</div>' +
        '</li>';
    var outerTemplate = '' +
        `</br>
            <div class="thumbnail">`+
        '<div id="carousel_' + randomTarget + '" class="carousel slide" data-ride="carousel">' +
        '<ol class="carousel-indicators">' +
        '<li data-target="#carousel_' + randomTarget + '" data-slide-to="0" class="active"></li>' +
        '<li data-target="#carousel_' + randomTarget + '" data-slide-to="1" class="active"></li>' +
        '<li data-target="#carousel_' + randomTarget + '" data-slide-to="2" class="active"></li>' +
        '<li data-target="#carousel_' + randomTarget + '" data-slide-to="3" class="active"></li>' +
        '<li data-target="#carousel_' + randomTarget + '" data-slide-to="4" class="active"></li>' +
        `</ol>
        <div class="carousel-inner">
        {2}
        </div>`+
        `</div>
        </div>
        <div>
        <p>Please click on the<strong> Filter </strong>button in case you want to filter further or click the<strong> New Search </strong>button if you want to start a fresh search with new specifications.</p>
        </div>`+
        '<div style="text-align:center;"><button id="btnFilter" class="btn-primary" style="border-radius: 20px;" onclick="showFiltersWithDropdown(\'' + currentTenantName + '\')">Filter</button><span> </span><button id="btnNewSearch" class="btn-primary" style="border-radius: 20px;" onclick="startNewSearch()">New Search</button><span> </span></div>';

    var carouselContainer = `{0}` +
        '<div class="row #carousel_' + randomTarget + '">' +
        `<div bot-data="image" class="col-xs-6 col-md-4"><img width="100" id="productimg" height="100" class="img-rounded" src="" alt=""/></div>
            <div bot-data="text" class="col-xs-6 col-md-8">
                <h4>{11}</h4>
                <p class="text-left">{12}</p>
            </div>
            </div>
            <br/>
            <table class="table table-striped">
            <tbody>
            {1}
            </tbody>
            </table>
            </div>`;

    var initialCarouselContainer = carouselContainer;

    var row = '';
    var keys = _.filter(Object.keys(response[0]), function (keyname) {
        return keyname.indexOf('dispHeadName') == -1;
    });
    for (i = 0; i < (response.length < 5 ? response.length : 5); i++) {
        carouselContainer = carouselContainer.replace('{11}', actualData[i].catalog_number + '(' + currentTenantName + ')');
        carouselContainer = carouselContainer.replace('{12}', actualData[i].short_desc);
        $('#carousel_rows_holder').html('');
        if (i === 0) {
            carouselContainer = carouselContainer.replace('{0}', '<div class="item active">');
        }
        else {
            carouselContainer = carouselContainer.replace('{0}', '<div class="item">');
        }
        for (j = 0; j < keys.length; j++) {
            row = '<tr>' +
                '<th>' + response[i]['dispHeadName' + keys[j]] + '</th>' +
                '<td>' + response[i][keys[j]] + '</td>' +
                '</tr>'
            $('#carousel_rows_holder').append(row);
        }
        var productInfoRow = '<tr><td  style="text-align:center;" colspan="2"><a href="javascript:void(0)" onclick="onCutsheetLinkClick(\'' + actualData[i].catalog_number + '\')">View Specification Document</a></td></tr>' +
            '<tr><td style="text-align:center;" colspan="2"><a href="javascript:void(0)" onclick="onCatalogAvailabilityCheck(\'' + actualData[i].catalog_number + '\')">Check Availability</a></td></tr>';
        $('#carousel_rows_holder').append(productInfoRow);
        carouselContainer = carouselContainer.replace('{1}', $('#carousel_rows_holder').html());
        $("#carousel_content_holder").append(carouselContainer);
        carouselContainer = initialCarouselContainer;
    }


    var updatedOuterTemplWithCarousel = outerTemplate.replace("{2}", $("#carousel_content_holder").html())
    $("ul.chat").append(responseHtml.replace("{3}", updatedOuterTemplWithCarousel));
    setResponseTheme(currentBot);
    $('#carousel_content_holder').html('');
}

function constructTemplate(response, actualData) {
    var outerTemplate = '<p><span><b>' + response.length + '</b></span> matching product found.</p>' +
        `</br>
            <div class="thumbnail">
            <div class="row">`+
        '<div bot-data="image" class="col-xs-6 col-md-4"><img width="100" height="100" class="img-rounded" src="" alt="" /></div>' +
        `<div bot-data="text" class="col-xs-6 col-md-8">` +
        '<h4>{11}</h4>' +
        ` <p class="text-left">{12}</p>
                </div>
            </div>
            <table class="table table-striped">
            <tbody>
            {0}
            </tbody>
        </table>
            </div>
            <div>
   <p>Please click on the<strong> Filter </strong>button in case you want to filter further or click the<strong> New Search </strong>button if you want to start a fresh search with new specifications.</p>
</div>`+
        '<div style="text-align:center;"><button id="btnFilter" class="btn-primary" style="border-radius: 20px;" onclick="showFiltersWithDropdown(\'' + currentTenantName + '\')">Filter</button><span> </span><button id="btnNewSearch" class="btn-primary" style="border-radius: 20px;" onclick="startNewSearch()">New Search</button><span> </span></div>'


    var responseHtml = '<li class="right clearfix">' +
        '<div style="padding:5px;">' +
        '<img src="./images/logos/sandy.jpg" width="40px" height="40px" alt="sandy image" style="border-radius:50%;border:1px solid #999;">' +
        '</div>' +
        '<div class="chat-body clearfix">' +
        '<div class="response">' +
        '{0}' +
        '</div>' +
        '</div>' +
        '</li>';
    var row = '';
    var keys = _.filter(Object.keys(response[0]), function (keyname) {
        return keyname.indexOf('dispHeadName') == -1;
    });
    for (i = 0; i < 1; i++) {
        outerTemplate = outerTemplate.replace('{11}', actualData[i].catalog_number + '(' + currentTenantName + ')');
        outerTemplate = outerTemplate.replace('{12}', actualData[i].short_desc);
        for (j = 0; j < keys.length; j++) {
            row = '<tr>' +
                '<th>' + response[i]['dispHeadName' + keys[j]] + '</th>' +
                '<td>' + response[i][keys[j]] + '</td>' +
                '</tr>'
            $('.prod-select-rows').append(row);
        }
        var productInfoRow = '<tr ><td style="text-align:center;" colspan="2"><a href="javascript:void(0)" onclick="onCutsheetLinkClick(\'' + actualData[i].catalog_number + '\')">View Specification Document</a></td></tr>' +
            '<tr><tdstyle="text-align:center;" colspan="2"><a href="javascript:void(0)" onclick="onCatalogAvailabilityCheck(\'' + actualData[i].catalog_number + '\')">Check Availability</a></td></tr>';
        $('.prod-select-rows').append(productInfoRow);
    }
    var updatedOuterTemplWithrows = outerTemplate.replace("{0}", $('.prod-select-rows').html())
    $("ul.chat").append(responseHtml.replace("{0}", updatedOuterTemplWithrows));
    setResponseTheme(currentBot);
    $('.prod-select-rows').html('');
}


function resetAttributeDropdowns(randomNumber) {
    if (allFilterAttributes.length > 0) {
        for (var i = 0; i < allFilterAttributes.length; i++) {
            var name = allFilterAttributes[i]["attrName"];
            var displayName = allFilterAttributes[i]["DisplayName"];
            var btnId = 'btn_' + name + '_' + randomNumber;
            $('#' + btnId).html(name + ' ' + '<span class="caret allignCaret"></span>');

        }
        $('#btnView_' + randomNumber).attr('disabled', 'true');
    }
    allFilterAttributes.length = 0;
    allAttributesFromService.length = 0;
}
function checkForWorkAround(responseHtml, sessionObj) {

    if (sessionObj.OrderNo) {
        getOrderStatusData(sessionObj["OrderNo"], function (orderData) {
            if (orderData != "NA") {
                $("ul.chat").append("There is correct data");
            }
            else {
                $("ul.chat").append(responseHtml.replace("{0}", sorryText));
            }
        });
    }
    else {
        $("ul.chat").append(responseHtml.replace("{0}", sorryText));
    }

}

function getCatalogData(catalogNumber, callback) {
    var result;
    $.ajax({
        url: global_environment + "/" + global_CSLinstance + "/product/getCatalogInfo?catalogNumber=" + catalogNumber,
        dataType: "json",
        type: "GET",
        headers: { "Content-Type": "application/json" },
        async: false,
        success: function (data) {
            result = data;
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
    console.log(result);
    if (result) {
        return callback(result);
    }
    else {
        return callback("NA");
    }
}

function getCrossProductsData(crossNumber, callback) {
    var result;
    var crossNo = [];
    crossNo.push(crossNumber);
    var filterQuery = {};
    filterQuery["applicationType"] = "CLOUD";
    filterQuery["competitorProductNumber"] = crossNo;
    $.ajax({
        url: global_environment + "/refx/webservices/gSearch/competitor2siemens",
        dataType: "json",
        type: "POST",
        data: JSON.stringify(filterQuery),
        headers: { "Content-Type": "application/json" },
        async: false,
        success: function (products) {
            result = products;
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
    if (result && result["genericProductInfos"] && result["genericProductInfos"].length > 0) {
        return callback(result["genericProductInfos"]);
    }
    else {
        return callback("NA");
    }
}

function getOrderStatusData(orderNumber, callback) {
    var result;
    $.ajax({
        url: global_environment + "/" + global_CSLinstance + "/order/getHeaderData?orderNo=" + orderNumber,
        dataType: "json",
        type: "GET",
        headers: { "Content-Type": "application/json" },
        async: false,
        success: function (data) {
            result = data;
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
    if (result["orderNum"] && result["orderNum"] == orderNumber) {
        return callback(result);
    }
    else {
        return callback("NA");
    }
}

function startNewSearch() {
    // var requestText = newSearchForProductsOrCatalogPrompt;
    currentBot = PRODUCT_SELECTOR;
    // showProductOrCatalogRequest(requestText);
    //var lexParameters = getParametersForAWSLex(requestText,currentBot, sessionAttributes);
    //postRequestToLex(lexParameters);
    allAttributesFromService.length = 0;
    onProductSelectorClick();
}
function startNewCatalogSearch() {
    // var requestText = newSearchForProductsOrCatalogPrompt;
    currentBot = PRODUCT_ASSIST;
    onCatalogSearchClick();
    // showProductOrCatalogRequest(requestText);
    //var lexParameters = getParametersForAWSLex(requestText,currentBot, sessionAttributes);
    //postRequestToLex(lexParameters);
}
function startNewSearchForCrossProducts() {
    var requestText = 'Cross Reference';
    currentBot = CROSS_ASSIST;
    //showRequest(requestText);
    sessionAttributes.userName = userName;
    var lexParameters = getParametersForAWSLex(requestText, currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}

function getHtmlResponseForCrossProductsData(crossData, callback) {
    var html = '';
    var trailingText = ' matching product found';
    var uid = 'div' + seconds;
    console.log(crossData.length);
    if (crossData) {
        if (crossData.length == 1) {
            var htmlFormat = '<div class="thumbnail">{0}</div>';
            html = html + buildHtmlResponseForItemCount('', crossData.length, ' matching product found');
            crossData.forEach(function (element, index) {
                var htmlContent = buildHtmlContentForCrossProduct(crossData[index]);
                html = html + htmlFormat.replace('{0}', htmlContent);
            });
        }
        else {
            var htmlFormat = '<div class="thumbnail">' +
                '<div id="' + uid + '" class="carousel slide" data-ride="carousel">' +
                '<ol class="carousel-indicators">' +
                '{0}' +
                '</ol>' +
                '<div class="carousel-inner">' +
                '{1}' +
                '</div>' +
                '<a class="left carousel-control" href="' + '#' + uid + '" data-slide="prev">' +
                '<span class="glyphicon glyphicon-chevron-left"></span>' +
                '<span class="sr-only">Previous</span>' +
                '</a>' +
                '<a class="right carousel-control" href="' + '#' + uid + '" data-slide="next">' +
                '<span class="glyphicon glyphicon-chevron-right"></span>' +
                '<span class="sr-only">Next</span>' +
                '</a>' +
                '</div>' +
                '</div>';
            if (crossData.length > THRESHOLD_RESPONSE_ITEMS_COUNT) {
                html = html + buildHtmlResponseForItemCount('', crossData.length, ' matching products found. Displaying first ' + THRESHOLD_RESPONSE_ITEMS_COUNT + ' products out of the total found.');
            }
            else {
                html = html + buildHtmlResponseForItemCount('', crossData.length, ' matching products found.');
            }

            var carouselIndicatorsHtml = '';
            var carouselInnerHtml = ''
            var lop = crossData.length;

            if (lop >= THRESHOLD_RESPONSE_ITEMS_COUNT) {
                for (var i = 0; i < THRESHOLD_RESPONSE_ITEMS_COUNT; i++) {
                    carouselIndicatorsHtml = carouselIndicatorsHtml + '<li data-target="' + '#' + uid + '" data-slide-to="' + i + '" class="active"></li>';
                    if (i === 0) {
                        carouselInnerHtml = carouselInnerHtml +
                            '<div class="item active">' + buildHtmlContentForCrossProduct(crossData[i]) + '</div>';
                    }
                    else {
                        carouselInnerHtml = carouselInnerHtml +
                            '<div class="item">' + buildHtmlContentForCrossProduct(crossData[i]) + '</div>';
                    }
                }
            }
            else {
                crossData.forEach(function (element, index) {
                    carouselIndicatorsHtml = carouselIndicatorsHtml + '<li data-target="' + '#' + uid + '" data-slide-to="' + index + '" class="active"></li>';
                    if (index === 0) {
                        carouselInnerHtml = carouselInnerHtml +
                            '<div class="item active">' + buildHtmlContentForCrossProduct(element) + '</div>';
                    }
                    else {
                        carouselInnerHtml = carouselInnerHtml +
                            '<div class="item">' + buildHtmlContentForCrossProduct(element) + '</div>';
                    }
                });
            }

            html = html + htmlFormat.replace('{0}', carouselIndicatorsHtml).replace('{1}', carouselInnerHtml);
        }
    }
    return callback(html);
}

function getHtmlResponseForCatalogData(products, callback) {
    var html = '';
    if (products) {
        var htmlFormat = '<div class="thumbnail">{0}</div>';
        html = html + buildHtmlResponseForItemCount('', "1", ' matching product found');
        buildHtmlContentForCatalogProduct(products, function (result) {
            if (result) {
                html = html + htmlFormat.replace('{0}', result);
                return callback(html);
            }
        });
    }
}

function buildHtmlContentForCatalogProduct(product, callback) {
    var html = '';
    if (product) {
        html = '<div class="row">' +
            '<div bot-data="image" class="col-xs-6 col-md-4">' +
            getHtmlForProductImage(product["imgUrl"]) +
            '</div>' +
            '<div bot-data="text" class="col-xs-6 col-md-8">' +
            '<p class="text-left">' +
            getEmptyIfNull(product["shortDesc"]) +
            '</p>' +
            '</div>' +
            '</div>' +
            '<br/>' +
            '<table class="table table-striped">' +
            '<tbody>' +
            '<tr>' +
            '<th>' + "Catalog Number" + '</th>' +
            '<td>' + getEmptyIfNull(product["catalogNumber"]) + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th>' + "List Price" + '</th>' +
            '<td>' + getEmptyIfNull(product["listPrice"]) + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th>' + "Minimum Order" + '</th>' +
            '<td>' + getEmptyIfNull(product["minimumOrder"]) + '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '<br/>';
        return callback(html);
    }
}

function buildHtmlContentForCrossProduct(product) {
    var html = ' ';
    var crossProductImage = getHtmlForProductImage(product.imageUrl);
    html = '<div class="row">' +
        '<div bot-data="image" class="col-xs-6 col-md-4">' +
        crossProductImage +
        '</div>' +
        '<div bot-data="text" class="col-xs-6 col-md-8">' +
        '<h4>' +
        product.catalogNumber + ' (' + product.tenantName + ')' +
        '</h4>' +
        '<p class="text-left">' +
        getEmptyIfNull(product.productDescription) +
        '</p>' +
        '</div>' +
        '</div>' +
        '<br/>' +
        '<table class="table table-striped">' +
        '<tbody>' +
        '<tr>' +
        '<th>' + 'Family' + '</th>' +
        '<td>' + getEmptyIfNull(product.productFamily) + '</td>' +
        '</tr>' +
        '<tr>' +
        '<th>' + 'List Price' + '</th>' +
        '<td>' + getEmptyIfNull(product.listPrice) + '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>';

    return html;
}

function getHtmlForProductImage(value) {
    if (value != null) {
        var htmlFormat = '<img width="100" id="productimg" height="100" class="img-rounded" src="' + value + '" alt=""/>';
        return htmlFormat;
    }
    else {
        return '<img width="100" height="100" class="img-rounded" src="./images/nophoto.png" alt="" />';
    }
}

function getEmptyIfNull(value) {
    if (value) {
        return value;
    }
    else {
        return 'NA';
    }
}

function buildHtmlResponseForItemCount(initialText, count, trailingText) {
    var html = '<p>' +
        initialText +
        '<span>' +
        '<b>' +
        count +
        '</b>' +
        '</span>' +
        trailingText +
        '</p>' +
        '</br>';
    return html;
}

function divertToProductInfoBOT(userRequestText) {
    unbindAutoSuggestion();
    currentBot = PRODUCT_ASSIST;
    setBotTheme(currentBot);
    setRequestTheme();
    sessionAttributes.userName = userName;
    //sessionAttributes.token = token;
    var requestText = productSelectorOptionsPrompt;
    allFilterAttributes.length = 0;
    allAttributesFromService.length = 0;
    onCatalogSearchClick(userRequestText);

}
function divertToProductSelectorBOT(userText) {
    bindAutoSuggestion();
    currentBot = PRODUCT_SELECTOR;
    setBotTheme(currentBot);
    setRequestTheme();
    sessionAttributes.userName = userName;
    //sessionAttributes.token = token;
    var requestText = productSelectorOptionsPrompt;
    allFilterAttributes.length = 0;
    allAttributesFromService.length = 0;
    onProductSelectorClick(userText);

}
function divertToCrossReferenceBOT(userRequestText, ) {
    unbindAutoSuggestion();
    currentBot = CROSS_ASSIST;
    setBotTheme(currentBot);
    setRequestTheme();
    sessionAttributes.userName = userName;
    //sessionAttributes.token = token;
    var requestText = userRequestText || 'Get competitor equivalent products';
    var lexParameters = getParametersForAWSLex(requestText, currentBot, sessionAttributes);
    postRequestToLex(lexParameters, '');
    // openingCrsRef = 1;
    //  openingMasterBot = openingOrderStatus = openingproductHelp = openingCrsRef =0;
}
function divertToOrderSearchBOT() {
    currentBot = ORDER_ASSIST;
    setBotTheme(currentBot);
    setRequestTheme();
    sessionAttributes.userName = userName;
    //sessionAttributes.token = token;
    var requestText = promptForOrderSearchOptions;
    showProductOrCatalogRequest(requestText);
    // openingOrderStatus = 1;
    // openingMasterBot = openingCrsRef = openingproductHelp = openingOrderStatus = 0;
}
function onModelNameLinkClick(modelName) {
    var displayText = 'model ' + modelName;
    showRequest(displayText);
    var lexParameters = getParametersForAWSLex(displayText, currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}
function onCatalogSearchClick(userInputText) {
    var displayText = userInputText || 'Catalog Search';
    var lexParameters = getParametersForAWSLex(displayText, currentBot, sessionAttributes);
    postRequestToLex(lexParameters, false);
}
function onProductSelectorClick(userInputText) {
    var displayText = userInputText || 'Search products';
    var lexParameters = getParametersForAWSLex(displayText, currentBot, sessionAttributes);
    postRequestToLex(lexParameters, false);
}

function searchOrdersByOrderNo() {
    var displayText = 'My recent orders';
    //sessionAttributes = { token: token };

    sessionAttributes.userName = userName;
    sessionAttributes["searchByType"] = "OrderNo";
    var lexParameters = getParametersForAWSLex(displayText, currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}
function searchOrdersByPONo() {
    var displayText = 'My recent orders';
    //sessionAttributes = { token: token };
    sessionAttributes["searchByType"] = "PONo";
    var lexParameters = getParametersForAWSLex(displayText, currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}
function searchOrdersByQuoteName() {
    var displayText = 'My recent orders';
    //sessionAttributes = { token: token };
    sessionAttributes["searchByType"] = "QuoteName";
    var lexParameters = getParametersForAWSLex(displayText, currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}

function searchOrdersByBomId() {
    var displayText = 'particulars about cfn';
    //sessionAttributes = { token: token };
    sessionAttributes["searchByType"] = "BomId";
    var lexParameters = getParametersForAWSLex(displayText, currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}



function setDefaultTxt() {
    $('ul.chat').html('');
    $('ul.chat').append(initialLinkChatContent);
}

function setBotTheme(currentBot, requestText) {
    showBotList = false;
    $("#bot-change-list").addClass('hidden');
    $("#messenger-header").addClass('hidden');
    $("#theme-header").removeClass('hidden');
    applyWindowHeight();
    $(".chat-user-img").addClass('hidden');

    if (openingCrsRef === 1 || openingOrderStatus === 1 || openingproductHelp === 1 || openingMasterBot === 1 || openingFeedbackHelp === 1) {
        if (openingMasterBot === 1) {
            openingMasterBot++;
        }
        setDefaultTxt();
    }

    if (currentBot === CROSS_ASSIST) {
        $('#theme-header').removeClass();
        $("#theme-header").addClass('crs-ref-image');
        $("#botname").text("Cross Reference");
        $("#products_footer").removeClass().addClass('crs-ref-footertheme');
        // openingMasterBot = openingOrderStatus = openingproductHelp = 0;
        $('#btnPost').css('background-color', '#ffa510');
    }

    else if (currentBot === GENERAL_CONVERSATION_ASSIST) {
        $('#theme-header').removeClass();
        $("#theme-header").addClass("home-masterbot-image");
        $("#botname").text("Home");
        $("#products_footer").removeClass().addClass('home-ref-footertheme');
        // openingCrsRef = openingOrderStatus = openingproductHelp = 0;
        $('#btnPost').css('background-color', '#2c87a7');
    }

    else if (currentBot === ORDER_ASSIST) {
        $('#theme-header').removeClass();
        $("#theme-header").addClass("order_status_img");
        $("#botname").text("Order Status");
        $("#products_footer").removeClass().addClass('order-status-footertheme');
        // openingCrsRef = openingMasterBot = openingproductHelp = 0;
        $('#btnPost').css('background-color', '#39cc44');
    }

    else if (currentBot === PRODUCT_ASSIST) {
        $('#theme-header').removeClass();
        $("#theme-header").addClass("prod_help_img");
        $("#botname").text("Product Info");

        $("#products_footer").removeClass().addClass('prod-help-footertheme');
        // openingCrsRef = openingMasterBot = openingOrderStatus = 0;
        $('#btnPost').css('background-color', '#d03969');
    }

    else if (currentBot === PRODUCT_SELECTOR) {
        $('#theme-header').removeClass();
        $("#theme-header").addClass("prod_help_selector_img");

        $("#botname").text("Product Selector");
        $("#products_footer").removeClass().addClass('prod-help-selector-footertheme');
        // openingCrsRef = openingMasterBot = openingOrderStatus = 0;
        $('#btnPost').css('background-color', '#77641f');
    }
    openingOrderStatus = openingproductHelp = openingCrsRef = 0;

}

function goToHome() {
    if ($("div#messenger-loader-area").hasClass("hidden")) {
        currentBot = GENERAL_CONVERSATION_ASSIST;
        showBotList = false;
        openingCrsRef = openingMasterBot = openingOrderStatus = openingproductHelp = openingSearchContent = 0;
        $("#bot-change-list,#theme-header,#live-chat-header,#help-articles-header").addClass('hidden');
        $("#messenger-header").removeClass('hidden');
        $("#messenger-content-area").removeClass().addClass('messenger-content-area');
        $(".chat-user-img").removeClass('hidden');
        $('ul.chat').html('');
        $("ul.chat").append(initialChatContent);
        $('div#messenger-body').addClass('in');

        //removed footer for master bot
        $("#products_footer").addClass('hidden');
        // $(".home_helpartc_footer").removeClass('hidden');
        applyWindowHeight();

        //disabled input for master bot/home page
        // $('#txtQuery').attr('readonly', true).css('cursor', 'default');
        $("#btnPost").css({ 'background-color': '#ccc', 'cursor': 'default' });
    }
    else {
        return;
    }
}


function openHelp(redirectFromHome) {
    if (redirectFromHome)
        var inputSearchVal = $('.home_helpartc_footer input').val() || '';
    showBotList = false;
    $("#bot-change-list").addClass('hidden');
    li_index = -1;
    $("#messenger-header,#theme-header,#live-chat-header").addClass('hidden');
    $("#help-articles-header").removeClass('hidden');
    $("#messenger-content-area").html('');
    $(".chat-user-img,#products_footer").addClass('hidden');
    if (redirectFromHome && inputSearchVal != '') {
        $("#messenger-content-area").append(`<ul class="chat"></ul>
        <div id="messenger-loader-area" class="text-center hidden">
        <img src="./images/ajax-loader.gif" alt="loading..." />
        </div>'`);
        helpArticleSearch(redirectFromHome, inputSearchVal);
    }
    else {
        $("#messenger-content-area").append(initialHelpArticleContent);
    }
    $("#messenger-content-area").css('border-bottom', '1px solid #ddd');
    openingCrsRef = openingMasterBot = openingproductHelp = openingOrderStatus = 0;
    applyWindowHeight();
};


var initialHelpArticleContent =
    '<ul class="chat">' +
    '<div class="default-help-content" style="padding:15px;">' +
    '<div style="position:relative;">' +
    '<img src="./images/logos/help-circle.png" alt="help-logo" class="circleimg" width="45" height="45" />' +
    '<img src="./images/logos/question-mark.png" alt="question-logo" class="questionimg" />' +
    ' </div>' +
    '<div class="help-text">' +
    '<span>Help Articles</span>' +
    '</div>' +
    '<div class="help-default-text">' +
    ' <span>A help center where you can get knowledge on all your common questions here.<span>' +
    '</div>' +
    '<div>' +
    '<img src="./images/logos/how-to-links.png" alt="how-to" class="" />' +
    '</div>' +
    '</div>' +
    '</ul>' +
    ' <div id="messenger-loader-area" class="text-center hidden">' +
    '<img src="./images/ajax-loader.gif" alt="loading..." />' +
    ' </div>'

var helpResp = {
    isLexEmpty: false,
    isConfApiEmpty: false
};

function helpArticleSearch(redirectFromHome, helpInput) {
    helpResp.isLexEmpty = helpResp.isConfApiEmpty = false;
    $('ul.chat').html('');
    if (redirectFromHome)
        $("#help-input").val(helpInput);

    var inputTxt = $("#help-input").val();
    if (inputTxt) {
        $("div#messenger-loader-area").removeClass("hidden");
        var baseUrl = global_environment + "/" + global_CSLinstance + "/compasConfluence/search";
        var confQueryString = '?searchString=' + inputTxt;
        var confurl = (baseUrl + confQueryString);
        $.ajax({
            type: "GET",
            url: encodeURI(confurl),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            headers: {  },
            success: function (data) {
                $("span.backBtn").on("click");
                var i;
                //$.when(dialogflowSearch(inputTxt)).done(function (dialogResultText) {
                    if (data && data.results && data.results.length) {
                        $("div#messenger-loader-area").addClass("hidden");
                        if (helpResp.isLexEmpty) {
                            $("ul.chat").append('<span style="font-size: 15px;font-weight: 500;margin: 17px;" class="foundResults">We found the following results:</span>');
                        }
                        for (i = 0; i < data.results.length; i++) {
                            // if (!dialogResultText) {
                            //     {
                                    helpResults(data.results[i]);
                            //     }
                            // }
                            // if (data.results[i].content.title.toUpperCase().indexOf(dialogResultText.toUpperCase()) === -1) {
                            //     helpResults(data.results[i]);
                            // }
                        };
                    }
                    else {
                        helpResp.isConfApiEmpty = true;
                    }
                    if (helpResp.isConfApiEmpty && helpResp.isLexEmpty) {
                        $("ul.chat .foundResults").remove();
                        $("ul.chat").append('<span style="font-size: 15px;font-weight: 500;margin: 17px;color:red;">Your search did not match any documents.</span>');
                        $("div#messenger-loader-area").addClass("hidden");
                    }
                //});
            },
            error: function () {
                $("div#messenger-loader-area").addClass("hidden");
            }
        });
    }
}

function helpResults(result) {
    var urlsList = [], descList = [], displayUrls = [];
    urlsList.push(result.url);
   // urlsList.push(result.url);
    displayUrls.push(result.title);
    var formattedExcerpt = result.excerpt.replace(/@@@hl@@@/gi, '<span style="font-weight:bold;">').replace(/@@@endhl@@@/gi, '</span>');
    descList.push(formattedExcerpt);
    for (i = 0; i < urlsList.length; i++) {
        $("ul.chat").append(
            '<li class="help-list-item">' +
            '<div class="help-link-response">' +
            '<a href="javascript:void(0)" class="alink" onclick="openNewLink(\'' + urlsList[i] + '\')">' + displayUrls[i] + '</a>' +
            '<div style="font-size:12px;">' + descList[i] + '</div>' +
            '</div>' +
            '</li>'
        )
    }

    // for (i = 0; i < urlsList.length; i++) {
    //     li_index++;
    //     var a = $("ul.chat li:eq(" + li_index + ") .alink");
    //     // a.attr("onclick", openNewLink(urlsList[i]));
    // }
}

function openNewLink(url) {
    //added true - to check if the calls to open external link is going from chatbot(this condition is being checked in injectdevicescript file)
    //openExternalLink(url, '', true);
    window.open(url, '_blank');
}


var showBotList = false;
function showBotChangeList() {
    showBotList = !showBotList;
    if (showBotList)
        $("#bot-change-list").removeClass('hidden');
    else
        $("#bot-change-list").addClass('hidden');
}


function soldTOAccountSearch() {
    var payload = {
        applicationType: "200",
        city: "*",
        customerAccountGroup: "DEFA",
        partnerType: "*",
        region: "*",
        custNumber: "*",
        name: "1*"
    }

    $.ajax({
        url: global_environment + "JobServer/webresources/SoldToAccountSearch",
        dataType: "json",
        type: "POST",
        data: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        async: false,
        success: function (data) {
            console.log('response->', data);
        },
        error: function (xhr, status, error) {
            console.log(error);
            $("div#messenger-loader-area").addClass("hidden");
        }
    });


}


function appendcheckavaHTML(result, productname) {
    $('#messenger-content-area ul').append(`<li class="right clearfix" id="auto-chat-id-${checkCounter}">
    <div style="padding:5px;">
        <img src="./images/logos/sandy.jpg" width="40px" height="40px" alt="sandy image" style="border-radius:50%;border:1px solid #999;">
    </div>
    <div class="chat-body clearfix">
        <div class="response">
            <p><span>Please find the requested information.</p>    
        <div class="thumbnail">
                <table class="table table-striped" id="check_availability_info_${checkCounter}" style="table-layout:fixed;">
                    <tbody>
                        <tr>
                            <th>Sold To Account</th>
                            <td class="soldToLabelInput">
                                <input class="soldToInput" placeholder="Please enter sold to account" id="auto-sold-to-input-id-${checkCounter}" onkeyup = soldtochangeforavailability(event,'${productname}') value="${soldToAccount}" disabled /> 
                                <img class="userSpecData soldToInputLoader hidden"  width="15" src="./images/ajax-loader.gif" alt="loading..." />
                                <button class="editSoldToBtn" id="auto-sold-to-edit-id-${checkCounter}" onclick="onsoldtovaluebtnclicked(event)">Change</button>
                            </td>
                        </tr>
                        <tr>
                            <th>Product Name</th>
                            <td id="auto-material-id-${checkCounter}">${result.material}</td>
                        </tr>
                        <tr>
                            <th>Lead Time</th>
                            <td id="auto-lead-time-id-${checkCounter}">${result.leadTime} </td>
                        </tr>
                        <tr>
                            <th>List Price</th>
                            <td id="auto-list-price-id-${checkCounter}">${result.listPrice}</td>
                        </tr>
                        <tr>
                            <th>Discounted Price</th>
                            <td id="auto-discounted-price-id-${checkCounter}">${result.discountedPrice}</td>
                        </tr>
                        <tr>
                            <th>Discounted Percentage</th>
                            <td id="auto-discount-percentage-id-${checkCounter}">${result.discountPercentage}</td>
                        </tr>
                        <tr>
                            <th>Available Quantity</th>
                            <td id="auto-available-qty-id-${checkCounter}">${result.availableQty}</td>
                        </tr>
                        <tr>
                            <th>Available Date</th>
                            <td id="auto-available-date-id-${checkCounter}">${result.availableDate}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
         <div id="check_ava_disclaimer_${checkCounter}" style="margin-top:5px;"><span>Disclaimer : </span>`
        + 'The requested quantity of the product should be available on ' + result.availableDate + '.This result displays the availability situation at this moment in time.'
        + 'The available quantity is permanently subject to change due to new incoming orders.Therefore the shown result cannot be guaranteed.'
        + 'The estimated lead time of the product above does not include international or domestic in-transit time.'
        + '</div>'
        + '</div>'
        + '</div>' +
        '</li>');
    //$("#check_availability_info_" + checkCounter + "  .soldToInput").addClass('hidden');
    if (result.availableDate == 'NA' && result.availableQty == 'NA') {
        $("#check_ava_disclaimer_" + checkCounter).addClass('hidden');
    }

    $("#auto-sold-to-input-id-" + checkCounter).autocomplete({});

    document.getElementById("messenger-content-area").scrollTop = document.getElementById("messenger-content-area").scrollHeight;
}

function checkavasuccess(response) {
    $("div#messenger-loader-area").addClass("hidden");
    var result = {
        material: '',
        leadTime: 0,
        listPrice: 0,
        discountedPrice: 0,
        discountPercentage: 0,
        availableQty: 1,
        availableDate: ''
    };
    if (response.checkAvailabilityList && response.checkAvailabilityList.length > 0) {
        var detail = response.checkAvailabilityList[0];
        result.material = detail.productName;
        result.leadTime = detail.leadTimeDetails ? (detail.leadTimeDetails.leadTime ? detail.leadTimeDetails.leadTime : 'NA') : 'NA';
        result.listPrice = detail.discountDetails ? (detail.discountDetails.listPrice ? detail.discountDetails.listPrice : 'NA') : 'NA';
        result.discountedPrice = detail.discountDetails ? (detail.discountDetails.discountedPrice ? detail.discountDetails.discountedPrice : 'NA') : 'NA';
        result.discountPercentage = detail.discountDetails ? (detail.discountDetails.discountPercentage ? detail.discountDetails.discountPercentage : 'NA') : 'NA';
        result.availableQty = detail.availableToPromise ? (detail.availableToPromise.available_Quantity ? detail.availableToPromise.available_Quantity : 'NA') : 'NA';
        result.availableDate = detail.availableToPromise ? (detail.availableToPromise.available_Date ? detail.availableToPromise.available_Date : 'NA') : 'NA';

        appendcheckavaHTML(result, (detail.productName || 'NA'));


    }

    setResponseTheme(currentBot);

}


function onCatalogAvailabilityCheck(productName) {
    checkCounter++;

    if (localStorage.QUOTEINFO) {
        var quoteInfo = JSON.parse(localStorage.QUOTEINFO) || ''
        if (quoteInfo != '') {
            soldToAccount = quoteInfo.soldToAccount;
        }
    }

    var soldToAccountId;

    if (soldToAccount) {
        soldToAccountId = soldToAccount.substring(0, 10);
    }
    var payload = {
        applicationType: "200",
        soldToAccount: soldToAccountId,
        atpRequired: true,
        discountedPriceRequired: true,
        leadTimeRequired: true,
        lineItemDetailList: [{ productName: productName, quantity: 1 }]
    };

    $("div#messenger-loader-area").removeClass('hidden');
    document.getElementById("messenger-content-area").scrollTop = document.getElementById("messenger-content-area").scrollHeight;

    $.ajax({
        url: global_environment + "/" + global_CSLinstance + "/checkAvailability/all",
        dataType: "json",
        type: "POST",
        data: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        success: checkavasuccess,
        error: function (xhr, status, error) {
            console.log(error);
            $("div#messenger-loader-area").addClass("hidden");
        }
    });
}


function onSelectAutoId(accountId, idNumber, productname) {
    $("#check_availability_info_" + idNumber + " .userSpecData").removeClass('hidden');
    var payload = {
        applicationType: "200",
        soldToAccount: accountId,
        atpRequired: true,
        discountedPriceRequired: true,
        leadTimeRequired: true,
        lineItemDetailList: [{ productName: productname, quantity: 1 }]
    };
    $.ajax({
        url: global_environment + "/" + global_CSLinstance + "/checkAvailability/all",
        dataType: "json",
        type: "POST",
        data: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        async: false,
        success: function (resp) {
            $('#auto-sold-to-input-id-' + idNumber).attr('disabled', 'disabled').trigger('blur');
            $("#check_availability_info_" + idNumber + " .userSpecData").addClass('hidden');
            $("div#messenger-loader-area").addClass("hidden");
            if (resp.checkAvailabilityList && resp.checkAvailabilityList.length > 0) {
                var detail = resp.checkAvailabilityList[0];
                $('#auto-material-id-' + idNumber).text(detail.productName);
                $('#auto-lead-time-id-' + idNumber).text(detail.leadTimeDetails ? detail.leadTimeDetails.leadTime : 'NA');
                $('#auto-list-price-id-' + idNumber).text(detail.discountDetails ? detail.discountDetails.listPrice : 'NA');
                $('#auto-discounted-price-id-' + idNumber).text(detail.discountDetails ? detail.discountDetails.discountedPrice : 'NA');
                $('#auto-discount-percentage-id-' + idNumber).text(detail.discountDetails ? detail.discountDetails.discountPercentage : 'NA');
                $('#auto-available-qty-id-' + idNumber).text(detail.availableToPromise ? detail.availableToPromise.available_Quantity : 'NA');
                $('#auto-available-date-id-' + idNumber).text(detail.availableToPromise ? detail.availableToPromise.available_Date : 'NA');
            }
        },
        error: function (xhr, status, error) {
            $("div#messenger-loader-area").addClass("hidden");
            $('#auto-sold-to-input-id-' + autoId).attr('disabled', 'disabled').val('');
            $("#check_availability_info_" + idNumber + " .userSpecData").addClass('hidden');
        }
    });
}



function onsoldtovaluebtnclicked(event) {
    var target = '#' + event.target.id;
    var idSplit = target.split('-');
    var autoId = idSplit[idSplit.length - 1];
    autoId = parseInt(autoId);
    $('#auto-sold-to-input-id-' + autoId).removeAttr('disabled').val('');
    $(target).addClass('hidden');
};

function soldtochangeforavailability(event, prodname) {
    var target = '#' + event.target.id;
    var idSplit = target.split('-');
    var autoId = idSplit[idSplit.length - 1];
    autoId = parseInt(autoId);
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var inputVal = $(target).val();
    var regexToCheckOnlyNumberes = new RegExp("^[0-9]+$");
    var inputcontainsOnlyNum = regexToCheckOnlyNumberes.test(inputVal);
    if (regex.test($(target).val())) {

        if (userSpecSoldToAccData && userSpecSoldToAccData.accountAccess == 'Y') {
            var payload = {
                applicationType: "200",
                city: "*",
                customerAccountGroup: "DEFA",
                partnerType: "*",
                region: "*",
                custNumber: "*",
                name: "*"
            }
            if (inputcontainsOnlyNum)
                payload.custNumber = "*" + inputVal + "*";
            else
                payload.name = "*" + inputVal + "*";


            $(target).autocomplete({
                source: function (request, response) {
                    $.ajax({
                        url: global_environment + "/JobServer/webresources/SoldToAccountSearch",
                        dataType: "json",
                        type: "POST",
                        async : true,
                        data: JSON.stringify(payload),
                        headers: { "Content-Type": "application/json" },

                        success: function (data) {
                            $("#check_availability_info_" + autoId + " .userSpecData").addClass('hidden');
                            if (data.accountSearchObject) {
                                soldTOAccountList = data.accountSearchObject.map(function (obj) { return { label: obj.soldToNumber + '/' + obj.firstName, value: obj.soldToNumber }; });
                                response(soldTOAccountList);
                            }
                            else {
                                response([{ label: 'No results found.', val: -1 }]);
                            }

                        }
                    })
                },
                minLength: 1,
                select: function (event, ui) {
                    if (ui.item.val == -1) {
                        //Clear the AutoComplete TextBox.
                        $(target).val("");
                        $("#check_availability_info_" + autoId + " .editSoldToBtn").addClass('hidden');
                        return false;
                    }

                    $(target).val(ui.item.label);
                    soldToAccount = ui.item.label;
                    $("#check_availability_info_" + autoId + " .editSoldToBtn").removeClass('hidden');
                    onSelectAutoId(ui.item.value, autoId, prodname);
                    return false;
                },
                search: function () {
                    $("#check_availability_info_" + autoId + " .userSpecData").removeClass('hidden');
                },
                classes: {
                    "ui-autocomplete": "chatbot-specific-auto-properties"
                },
                response: function (event, ui) {
                    // ui.content is the array that's about to be sent to the response callback.
                    if (ui.content.length === 0) {
                        $("#check_availability_info_" + autoId + " .userSpecData").addClass('hidden');
                    }
                }
            });

        }
        else {
            $(target).autocomplete({
                source: soldTOAccountList.map(
                    function (obj) {
                        return { label: obj.soldToNumber + '/' + obj.firstname, value: obj.soldToNumber };
                    }),
                minLength: 1,
                select: function (event, ui) {
                    $("#check_availability_info_" + autoId + " .userSpecData").removeClass('hidden');
                    if (ui.item.val == -1) {
                        //Clear the AutoComplete TextBox.
                        $(target).val("");
                        $("#check_availability_info_" + autoId + " .editSoldToBtn").addClass('hidden');
                        return false;
                    }

                    $(target).val(ui.item.label);
                    $("#check_availability_info_" + autoId + " .editSoldToBtn").removeClass('hidden');
                    onSelectAutoId(ui.item.value, autoId, prodname);
                    soldToAccount = ui.item.label;
                    return false;
                },
                search: function () {
                    $("#check_availability_info_" + autoId + " .userSpecData").removeClass('hidden');
                },
                classes: {
                    "ui-autocomplete": "chatbot-specific-auto-properties"
                },
                response: function (event, ui) {
                    // ui.content is the array that's about to be sent to the response callback.
                    if (ui.content.length === 0) {
                        $("#check_availability_info_" + autoId + " .userSpecData").addClass('hidden');
                    }
                }
            });

        }
    }
};




function onTrackingNumberClick(trackingNo, carrierName) {
    var payload = {
        'applicationType': '200',
        'sapRouteCode': carrierName || 'LTLUPS',
        'trackingNo': trackingNo
    }

    $.ajax({
        url: global_environment + "/CPMServer/webservices/TrackingService/carrierTracking",
        dataType: "json",
        type: "POST",
        data: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        async: false,
        success: function (carrierTrackingInfo) {
            var carrierSiteURL = carrierTrackingInfo.url;

            /*initialize variable to hold query string. 
            In case of get request the URL would already contain '?'*/
            var param = (carrierSiteURL.indexOf('?') > -1) ? '&' : '?';

            var carrierSiteFormString = carrierTrackingInfo.inputFormData;

            //Loop through the form data array to create query string
            $.each(carrierSiteFormString, function (inputIndex, carrierString) {
                //remove backslah from the string
                var htmlString = carrierString.replace('\\', '');

                //"<INPUT TYPE="HIDDEN" NAME="track.x" VALUE="Track">"
                var hiddenField = $.parseHTML(htmlString)[0];

                //Add the param if it is not already present in the URL
                if (carrierSiteURL.indexOf(hiddenField.name) === -1) {
                    param = param + hiddenField.name + '=' + hiddenField.value;

                }

                if (inputIndex !== (carrierSiteFormString.length - 1)) {
                    param = param + '&';
                }

            });

            openNewLink(carrierSiteURL + param);
        },
        error: function () {
            console.log('Error while fetching tracking information');
        }
    });

}

function closeChat() {
    $('#messenger').css({ 'overflow': 'unset', 'display': 'none' });
    $('#chatBody').fadeOut(500);
    $('#chat').fadeIn(1000);
    window.parent.postMessage({action:'closeSandy',value: '*' },'*');
}

function open_chatbox(event) {

    if (navigator.userAgent.indexOf('ANDROID-NATIVE') > -1 || navigator.userAgent.indexOf('IOS-NATIVE') > -1) {
        $('#messenger').css({ 'overflow': 'auto', 'display': 'block' });
        $('#chat').fadeOut(500);
        $('#chatBody').fadeIn(1000);
    }
    else {
        // if ($(event.target).hasClass('noclick')) {
        //     $(event.target).removeClass('noclick');
        // }
        // else {
            $('#messenger').css({ 'overflow': 'auto', 'display': 'block' });
            $('#chat').fadeOut(500);
            $('#chatBody').fadeIn(1000);
        // }
    }

    applyWindowHeight();

}

function onCatalogNumberSearchClick() {
    onHelpLinkClick('CatalogSearch', 'true');
}

function onProductSelectorLinkClick() {
    onHelpLinkClick('ProductSelector', 'true')
}

function onHelpArticlesLinkClick() {
    openHelp();
}

function onCustomQuestionDisplayClick() {
    var displayText = 'Ok ' + userName + '.Below are few commonly asked questions that I can help you with.' +
        '<div>' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<button class="btn-productOptions" onclick="postCustomQuestions(' + "'Delayed'" + ')">Why my order is delayed?</button>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<button class="btn-productOptions" onclick="postCustomQuestions(' + "'Shipped'" + ')">How many lines are shipped for this order?</button>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<button class="btn-productOptions" onclick="postCustomQuestions(' + "'Lines not shipped'" + ')">How many lines are not shipped ?</button>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<button id="" class="btn-productOptions" onclick="postCustomQuestions(' + "'Hold'" + ')">How many lines are on hold for this order?</button>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<button class="btn-productOptions" onclick="postCustomQuestions(' + "'Confirmed'" + ')">How many lines are confirmed for this order?</button>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<button class="btn-productOptions" onclick="postCustomQuestions(' + "'Other lines shipped'" + ')">What are the other lines shipped with this ?</button>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<button class="btn-productOptions" onclick="postCustomQuestions(' + "'Orderbom relevant items'" + ')">What are the orderbom relevant items ?</button>' +
        '</td>' +
        '</tr>' +
        '</table>'
    '</section>'
    '</div>';
    showProductOrCatalogRequest(displayText);
    //var lexParameters = getParametersForAWSLex(displayText,currentBot, sessionAttributes);
    //postRequestToLex(lexParameters);

}
function postCustomQuestions(customQuestion) {
    var displayText = '';
    switch (customQuestion) {
        case "Delayed":
            displayText = 'Why my order is delayed?';
            break;
        case "Shipped":
            displayText = 'How many lines are shipped';
            break;
        case "Lines not shipped":
            displayText = 'How many lines are not shipped';
            break;
        case "Hold":
            displayText = 'How many lines are on hold';
            break;
        case "Confirmed":
            displayText = 'How many lines are confirmed';
            break;
        case "Other lines shipped":
            displayText = 'What are the other lines Shipped with this';
            break;
        case "Orderbom relevant items":
            displayText = 'What are the orderbom relevant items?';
            break;
        default:
            displayText = 'orders';
            break;

    }
    var lexParameters = getParametersForAWSLex(displayText, currentBot, sessionAttributes);
    postRequestToLex(lexParameters);
}


function buildProductAttribute() {
    var result;
    var nameValuePair = [];
    var finalObj = {
        "metadata": {
            "schemaVersion": "1.0",
            "importType": "LEX",
            "importFormat": "JSON"
        },
        "resource": {
            "description": "Siemens product attributevalue",
            "name": "SIEMENS_ProductAttributeTypes",
            "version": "44",
            "enumerationValues": [],
            "valueSelectionStrategy": "ORIGINAL_VALUE"
        }
    }
    var jsonObj = {};
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
            $.ajax({
                url: global_environment + "/" + global_CSLinstance + "/product/getFamilyNames",
                dataType: "json",
                type: "GET",
                headers: { "Content-Type": "application/json" },
                async: false,
                success: function (data) {
                    result = data;
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        }
    };
    xhttp.timeout = 5000;
    xhttp.open("GET", global_environment, true);
    xhttp.send();
    if (result && result.length > 0) {
        for (var i = 0; i < result.length; i++) {
            var combinations = allAttributesForfamily(result[i].keyword);
            for (var j = 0; j < combinations.length; j++) {
                var obj = {};
                obj["value"] = combinations[j];
                nameValuePair.push(obj);
            }
        }
        finalObj["resource"].enumerationValues = nameValuePair;
    }
    console.log(JSON.stringify(finalObj));
}
function allAttributesForfamily(familyName) {
    var result;
    var synonymArray;
    var attrValuesArray;
    var nameValuePairArray = [];
    $.ajax({
        url: global_environment + "/" + global_CSLinstance + "/product/getAttbs?tenantName=" + familyName,
        dataType: "json",
        type: "GET",
        headers: { "Content-Type": "application/json" },
        async: false,
        success: function (data) {
            result = data;
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
    var attributes = result["attributes"];
    if (attributes.length > 0) {
        for (var i = 0; i < attributes.length; i++) {
            synonymArray = attributes[i].synonyms;
            attrValuesArray = attributes[i].attrValues;
            for (var j = 0; j < synonymArray.length; j++) {
                for (var k = 0; k < attrValuesArray.length; k++) {
                    if (nameValuePairArray.indexOf(synonymArray[j] + ' ' + attrValuesArray[k]) == -1) {
                        nameValuePairArray.push(synonymArray[j] + ' ' + attrValuesArray[k]);
                    }
                    if (nameValuePairArray.indexOf(attrValuesArray[k] + ' ' + synonymArray[j]) == -1) {
                        nameValuePairArray.push(attrValuesArray[k] + ' ' + synonymArray[j]);
                    }
                    //nameValuePairArray.push(synonymArray[j] + ' = ' + attrValuesArray[k]);
                    //nameValuePairArray.push(synonymArray[j] + ' value ' + attrValuesArray[k]);
                }
            }
        }
    }
    return nameValuePairArray;
}

function redirectToCatalogDetails(catalogId) {
    var e = document.body;
    var $injector = angular.element(e).injector();
    var $state = $injector.get('$state');
    $state.go('CATALOG_DETAIL', { id: catalogId });
    closeChat();

}

function onCutsheetLinkClick(productName) {
    $("div#messenger-loader-area").removeClass("hidden");
    document.getElementById("messenger-content-area").scrollTop = document.getElementById("messenger-content-area").scrollHeight;
    var payload = { applicationType: "200", catalogNumber: productName }
    $.ajax({
        url: global_environment + "/" + "CatalogServer/webresources/product/attribute",
        dataType: "json",
        type: "POST",
        data: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        success: function (data) {
            $("div#messenger-loader-area").addClass("hidden");
            redirectToCatalogDetails(productName);
            //openNewLink(data.url);
        },
        error: function (xhr, status, error) {
            $("div#messenger-loader-area").addClass("hidden");
            console.log(error);
            updateErrRes();
        }
    })
}

function updateErrRes() {
    var responseText = `<div>
    <p>I'm sorry.No additional details found for this product .</p>
    <p>Please click on the<strong> New Search </strong>button if you want to start a fresh search with new specifications.</p>
    </div>
    <button id="btnNewSearch" class="btn-primary" style="border-radius: 20px;" onclick="startNewCatalogSearch()">New Search</button>
    <br/>`

    var responseHtml = '<li class="right clearfix">' +
        '<div style="padding:5px;">' +
        '<img src="./images/logos/sandy-failure.jpg" width="40px" height="40px" alt="sandy image" style="border-radius:50%;border:1px solid #999;">' +
        '</div>' +
        '<div class="chat-body clearfix">' +
        '<div class="response">' +
        '{0}' +
        '</div>' +
        '</div>' +
        '</li>';
    $("ul.chat").append(responseHtml.replace("{0}", responseText));
    setResponseTheme(currentBot);
    $("div#messenger-loader-area").addClass("hidden");
    document.getElementById("messenger-content-area").scrollTop = document.getElementById("messenger-content-area").scrollHeight;
}



$("#messenger-content-area").click(function () {
    showBotList = false;
    $("#bot-change-list").addClass('hidden');
});

function applyWindowHeight() {
    var windowHeight = $(window.top).height();
    var footerHeight = $('#console-nav-footer').height() || '50px';
    var headerHeight = $('.compas-header').height() || '60';
    //subtract headerbar and footer 30px;
    // $("#messenger").css({ 'height': (windowHeight - headerHeight - 50) + 'px', 'bottom': footerHeight });
    // $('#messenger-body').css('height', ($("#chatBody").height() - $("#chat-header-area").height()));
    // $("#messenger-content-area").css("height", ($('#messenger-body').height() - 50));
    $("#messenger").css({ 'height': (windowHeight - headerHeight) + 'px', 'top': 0});
    $('#messenger-body').css({'height': ("100%" - $("#chat-header-area").height())});
    $("#messenger-content-area").css("height", ("100%"));

}

// call below func while changing orientation to portrait or landscape
window.onresize = function () { applyWindowHeight(); }

function unbindAutoSuggestion() {
    $("#txtQuery").autocomplete({ source: [] });
}

open_chatbox();


