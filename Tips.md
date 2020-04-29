<!-- mogudegu h59 -->
## 使用技巧
3.当窗口大小改变，重新计算
    window.addEventListener('resize', () => {
        if (!this.slider || !this.slider.enabled) {
        return
        }
        clearTimeout(this.resizeTimer)
        this.resizeTimer = setTimeout(() => {
        if (this.slider.isInTransition) {
            this._onScrollEnd()
        } else {
            if (this.autoPlay) {
            this._play()
            }
        }
        this.refresh()
        }, 60)
    })


2.调用方式的时候，使用20毫秒的延迟（因为浏览器的延迟时间是17毫秒）
    setTimeout(()=>{
        this._setSliderWidth();//调用的方法
    },20)

1.去掉点击时间3毫秒的延迟
    <!-- 安装 -->
    npm install fastclick -D
    <!-- 使用 -->
    import fastclick from fastclick
    fastclick.attach(document.body)

##文件夹说明
2.components---业务组件文件夹

1.base---基础组件文件夹


## 使用说明
2.建立本地和仓库的联系
    a:git init
    b:git remote add origin https://github.com/mogudegu/ChickenMusic.git

1.新建dev分支
    git branch -g dev


