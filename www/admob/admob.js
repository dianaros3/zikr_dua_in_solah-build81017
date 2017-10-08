/*jshint -W098 */
/*(function(document)
 {
  "use strict";
     function ad_failure(message)
     {
          insert your own ad failure code here 
         //console.log(message);
     }

     function prepareAds()
     {
         if( window.plugins && window.plugins.AdMob )
         {
            var ad_nodelist = document.querySelectorAll("template.admob");
            var ad_array = Array.prototype.slice.call(ad_nodelist);
            ad_array.forEach(function(domNode)
            {
                var admob_ios_key       = domNode.attributes["data-ios-key"].value;
                var admob_android_key   = domNode.attributes["data-android-key"].value;
                var banner_at_top       = (domNode.attributes["data-top"].value === "true");
                var adId = (navigator.userAgent.indexOf('Android') >=0) ? admob_android_key : admob_ios_key;
                var am = window.plugins.AdMob;

                am.setOptions( {
                    publisherId: adId,
                    bannerAtTop: banner_at_top, // set to true, to put banner at top
                    overlap: false, // set to true, to allow banner overlap webview
                    offsetTopBar: true, // set to true to avoid ios7 status bar overlap
                    isTesting: false // receiving test ad
                });
                am.createBannerView();
            });//each
        }
     }

     document.addEventListener("app.Ready",prepareAds,false);
 })(document);*/

// place our admob ad unit id here
var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: 'ca-app-pub-8033084846695067/9686329438',
    interstitial: 'ca-app-pub-6869992474017983/1657046752'
  };
}

function createSelectedBanner(){
  AdMob.createBanner({
    adId: admobid.banner,
    overlap: false,
    offsetTopBar: false,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
  });
}
function showBannerAtPosition(){
  AdMob.showBanner( AdMob.AD_POSITION.BOTTOM_CENTER );
}

function initAd(){
  AdMob.setOptions({
    // adSize: 'SMART_BANNER',
    // width: integer, // valid when set adSize 'CUSTOM'
    // height: integer, // valid when set adSize 'CUSTOM'
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
    bgColor: 'black', // color name, or '#RRGGBB'
    // x: integer,    // valid when set position to 0 / POS_XY
    // y: integer,    // valid when set position to 0 / POS_XY
    isTesting: true, // set to true, to receiving test ad for testing purpose
    // autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
  });
  // new events, with variable to differentiate: adNetwork, adType, adEvent
  $(document).on('onAdFailLoad', function(data){
    alert('error: ' + data.error +
        ', reason: ' + data.reason +
        ', adNetwork:' + data.adNetwork +
        ', adType:' + data.adType +
        ', adEvent:' + data.adEvent); // adType: 'banner', 'interstitial', etc.
  });
  $(document).on('onAdLoaded', function(data){});
  $(document).on('onAdPresent', function(data){});
  $(document).on('onAdLeaveApp', function(data){});
  $(document).on('onAdDismiss', function(data){});

  $('#btn_create').click(createSelectedBanner);
  $('#btn_remove').click(function(){
    AdMob.removeBanner();
  });
  $('#btn_show').click(showBannerAtPosition);
  $('#btn_hide').click(function(){
    AdMob.hideBanner();
  });

  // test interstitial ad
  $('#btn_prepare').click(function(){
    AdMob.prepareInterstitial({
      adId:admobid.interstitial,
      autoShow: false,
    });
  });
  $('#btn_showfull').click(function(){
    AdMob.showInterstitial();
  });

  // test case for #256, https://github.com/floatinghotpot/cordova-admob-pro/issues/256
  $(document).on('backbutton', function(){
    if(window.confirm('Are you sure to quit?')) navigator.app.exitApp();
  });

  // test case #283, https://github.com/floatinghotpot/cordova-admob-pro/issues/283
  $(document).on('resume', function(){
    AdMob.showInterstitial();
  });
}

// check the webview resized properly
$(window).resize(function(){
  $('#textinfo').html('web view: ' + $(window).width() + " x " + $(window).height());
});

function initAdMob() {
  if (! AdMob) { alert( 'admob plugin not ready' ); return; }

  initAd();

  // display a banner at startup
  createSelectedBanner();
}