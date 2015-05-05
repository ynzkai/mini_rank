# mini_rank.js

## 用法：
### 函数版
1. <script type="text/javascript" src="js/mini_rank.js"></script>

    init_mini_rank("star1", 1, 24, function() {});
    init_mini_rank("star2", 2, 24, function() {});
    init_mini_rank("star3", 3, 24, function() {});
    init_mini_rank("star4", 4, 24, function() {});

### 对象版
2. <script type="text/javascript" src="js/mini_rank_o.js"></script>

    var star1 = new MiniRank("star1", 1, 24, function(r) {alert(r)});
    var star2 = new MiniRank("star2", 2, 24, function(r) {alert(r)});
    var star3 = new MiniRank("star3", 3, 24, function(r) {alert(r)});
    var star4 = new MiniRank("star4", 4, 24, function(r) {alert(r)});
    star1.init();
    star2.init();
    star3.init();
    star4.init();
