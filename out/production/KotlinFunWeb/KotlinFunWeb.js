if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinFunWeb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinFunWeb'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'KotlinFunWeb'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'KotlinFunWeb'.");
}
var KotlinFunWeb = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_fqsp1s$;
  var throwCCE = Kotlin.throwCCE;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var set_onBlurFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onBlurFunction_pszlq2$;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var input = $module$kotlinx_html_js.kotlinx.html.input_mm0abt$;
  function main(args) {
    reDraw();
  }
  function reDraw$lambda($receiver) {
    body($receiver);
    return Unit;
  }
  function reDraw() {
    var tmp$;
    var root = document.getElementById('root');
    var child = (tmp$ = root != null ? root.childNodes : null) != null ? tmp$[0] : null;
    if (child != null) {
      root.removeChild(child);
    }
    root != null ? append(root, reDraw$lambda) : null;
  }
  function body$lambda$lambda(it) {
    showWow = false;
    reDraw();
    return Unit;
  }
  function body$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$(freeText);
    set_onClickFunction($receiver, body$lambda$lambda);
    return Unit;
  }
  function body$lambda$lambda_0(this$) {
    return function (it) {
      var tmp$;
      var v = typeof (tmp$ = it.currentTarget.value) === 'string' ? tmp$ : throwCCE();
      if (v.length === 0) {
        v = 'xxxxxxxxxxxxxxxxxxxxxxx';
        set_style(this$, 'color: white;');
      }
      freeText = v;
      console.log(freeText);
      showWow = true;
      reDraw();
      return Unit;
    };
  }
  function body$lambda_0($receiver) {
    $receiver.value = freeText;
    var save = body$lambda$lambda_0($receiver);
    set_onBlurFunction($receiver, save);
    set_onChangeFunction($receiver, save);
    return Unit;
  }
  function body($receiver) {
    if (showWow) {
      span($receiver, void 0, body$lambda);
    }
     else {
      inputAutoSelect($receiver, body$lambda_0);
    }
  }
  function inputAutoSelect($receiver, b) {
    var inputText = input($receiver, InputType.text, void 0, void 0, void 0, void 0, b);
    inputText.focus();
    inputText.select();
  }
  var freeText;
  var showWow;
  _.main_kand9s$ = main;
  Object.defineProperty(_, 'freeText', {
    get: function () {
      return freeText;
    },
    set: function (value) {
      freeText = value;
    }
  });
  Object.defineProperty(_, 'showWow', {
    get: function () {
      return showWow;
    },
    set: function (value) {
      showWow = value;
    }
  });
  freeText = 'xxxxxxxxxxxxxx';
  showWow = true;
  main([]);
  Kotlin.defineModule('KotlinFunWeb', _);
  return _;
}(typeof KotlinFunWeb === 'undefined' ? {} : KotlinFunWeb, kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=KotlinFunWeb.js.map
