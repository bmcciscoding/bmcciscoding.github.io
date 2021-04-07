(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{492:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("这是我关于 iOS 布局相关的所有吐槽！但也是我局限的理解，欢迎各路英豪斧正！")]),t._v(" "),s("h2",{attrs:{id:"现有的布局方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现有的布局方式"}},[t._v("#")]),t._v(" 现有的布局方式")]),t._v(" "),s("p",[t._v("官方支持的布局方式有 "),s("strong",[t._v("frame")]),t._v("、"),s("strong",[t._v("autolayout")]),t._v("、"),s("strong",[t._v("stackview")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"frame"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frame"}},[t._v("#")]),t._v(" Frame")]),t._v(" "),s("p",[t._v("frame 布局宛如裹脚布，又臭又长。唯一的优点就是执行效率高，但是编码效率低，写起来很难受。而且容易造成很多魔数，让人维护起来很抓狂。在布局会动态变化，safe area 等一些情况，需要考虑很多方面。\n在编码方面，有些方案会通过 category，给 UIView 添加一些常用的属性来避免直接设置 frame，也算是一个小小的改进书写体验。")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v("@property "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CGFloat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< Shortcut for frame.origin.x.")]),t._v("\n@property "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CGFloat")]),t._v(" top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< Shortcut for frame.origin.y")]),t._v("\n@property "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CGFloat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< Shortcut for frame.origin.x + frame.size.width")]),t._v("\n@property "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CGFloat")]),t._v(" bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< Shortcut for frame.origin.y + frame.size.height")]),t._v("\n@property "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CGFloat")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< Shortcut for frame.size.width.")]),t._v("\n@property "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CGFloat")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< Shortcut for frame.size.height.")]),t._v("\n@property "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CGFloat")]),t._v(" centerX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< Shortcut for center.x")]),t._v("\n@property "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CGFloat")]),t._v(" centerY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< Shortcut for center.y")]),t._v("\n@property "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CGPoint")]),t._v(" origin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< Shortcut for frame.origin.")]),t._v("\n@property "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CGSize")]),t._v("  size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< Shortcut for frame.size.")]),t._v("\n")])])]),s("p",[t._v("但是无法自适应布局，仍然让我很绝望。")]),t._v(" "),s("p",[t._v("推荐场景：固定的局部布局")]),t._v(" "),s("h3",{attrs:{id:"autolayout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autolayout"}},[t._v("#")]),t._v(" Autolayout")]),t._v(" "),s("p",[t._v("autolayout 是官方提供的，基于约束计算的布局方式。计算方式是基于 "),s("img",{attrs:{src:"https://en.wikipedia.org/wiki/Cassowary",alt:"cassowary"}}),t._v(" 实现的。从 iOS12 之后，调整了约束计算的策略，提高了效率。但是依然不够美好。")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addConstraint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSLayoutConstraint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                        attribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                        relatedBy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("equal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                        toItem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                        attribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                        multiplier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                        constant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("如果你直接徒手撸，就要使用这样的 API，难受呀。业界也推出了 Masonry (OC) 和 SnapKit (Swift) 这两库，从 API 让开发者愉悦。但是虽然自动布局能解决大部分问题，但是有些地方使用起来还是相当繁琐。比如连续N个间距不同的视图，写起来还是很恶心。")]),t._v(" "),s("h3",{attrs:{id:"stackview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stackview"}},[t._v("#")]),t._v(" StackView")]),t._v(" "),s("p",[t._v("StackView 在我看来是，是个残次品，只能解决某些问题，而且每个版本支持的 api 都不一样，所以使用起来还是还让我苦恼。\n比如这个接口，只支持 iOS11。")]),t._v(" "),s("div",{staticClass:"language-objecitve-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- (void)setCustomSpacing:(CGFloat)spacing afterView:(UIView *)arrangedSubview API_AVAILABLE(ios(11.0),tvos(11.0));\n")])])]),s("h3",{attrs:{id:"yogakit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yogakit"}},[t._v("#")]),t._v(" YogaKit")]),t._v(" "),s("p",[t._v("除了以上官方提供的三种布局方式，业界还有 facebook 推出的 yoga 框架。使用了前端很熟悉的 flexbox 来进行布局。")])])}),[],!1,null,null,null);a.default=e.exports}}]);