/**
    * @x-viewer/ui v0.0.1 build Sat May 10 2025
    * undefined
    * Copyright 2025 x-viewer
    * @license MIT
    */
function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".pop-panel{background:#fff;border-radius:4px;box-shadow:0 12px 48px 16px rgba(0,0,0,.03),0 9px 28px 0 rgba(0,0,0,.05),0 6px 16px -8px rgba(0,0,0,.08);color:#333;left:calc(90% - 160px);position:absolute;top:calc(70% - 100px);width:160px;z-index:99999999}.pop-panel .pop-panel-header{border-bottom:1px solid #efefef;color:#333;cursor:move;font-size:16px;font-weight:bolder;padding:16px 24px 8px;user-select:none}.pop-panel .pop-panel-body{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:16px 24px}.pop-panel .pop-panel-body .pop-panel-item{cursor:pointer;display:inline-block;font-size:16px;margin-right:16px}.pop-panel .pop-panel-body .pop-panel-item .x-viewer-iconfont{font-size:24px}.pop-panel .pop-panel-body .pop-panel-item:last-child{margin-right:0}.pop-panel .pop-panel-body .pop-panel-item.active,.pop-panel .pop-panel-body .pop-panel-item:hover{color:#2c7be5}.pop-panel .pop-panel-body .pop-panel-item.disable{color:#999;cursor:not-allowed}";
styleInject(css_248z$1);

class PopPanel {
    constructor(id, content, container = document.body) {
        this.container = container;
        this.isFollowing = false;
        this.diffX = 0;
        this.diffY = 0;
        this.start = (event) => {
            this.isFollowing = true;
            this.diffX = event.clientX - this.element.offsetLeft;
            this.diffY = event.clientY - this.element.offsetTop;
        };
        this.stop = () => {
            this.isFollowing = false;
        };
        this.follow = (event) => {
            if (!this.isFollowing) {
                return;
            }
            const left = event.clientX - this.diffX;
            const top = event.clientY - this.diffY;
            this.element.style.left = left + "px";
            this.element.style.top = top + "px";
        };
        this.element = document.createElement("div");
        this.element.id = id;
        this.element.classList.add("pop-panel");
        const header = document.createElement("div");
        header.classList.add("pop-panel-header");
        header.append(content);
        this.element.appendChild(header);
        this.header = header;
        const info = document.createElement("div");
        info.classList.add("pop-panel-body");
        this.element.appendChild(info);
        this.body = info;
        header.addEventListener("mousedown", this.start);
        header.addEventListener("mouseup", this.stop);
        document.body.addEventListener("mousemove", this.follow);
        this.container.appendChild(this.element);
    }
    destroy() {
        document.body.removeEventListener("mousemove", this.follow);
        this.element.removeEventListener("mousedown", this.start);
        this.element.removeEventListener("mouseup", this.stop);
        this.element.remove();
    }
}

var css_248z = ".follow-tooltip{background:rgba(25,25,25,.3);border-radius:2px;color:hsla(0,0%,100%,.8);font-size:12px;left:-500px;padding:6px;position:absolute;z-index:99999999}";
styleInject(css_248z);

class Tooltip {
    constructor(id, content, cfg) {
        this.follow = (event) => {
            this.node.style.left = event.offsetX + 15 + "px";
            this.node.style.top = event.offsetY - 30 + "px";
        };
        this.show = () => this.node.hasAttribute("hidden") && this.node.removeAttribute("hidden");
        this.hide = () => !this.node.hasAttribute("hidden") && this.node.setAttribute("hidden", "");
        this.destroy = () => {
            if (this.target) {
                this.target.removeEventListener("mousemove", this.follow);
            }
            else {
                document.removeEventListener("mousemove", this.follow);
            }
            this.parentNode.removeChild(this.node);
        };
        this.node = document.createElement("div");
        this.node.id = id;
        content && this.node.append(content);
        this.childNode = document.createElement("div");
        this.target = cfg === null || cfg === void 0 ? void 0 : cfg.target;
        this.parentNode = (cfg === null || cfg === void 0 ? void 0 : cfg.parentNode) || document.body;
        if (cfg === null || cfg === void 0 ? void 0 : cfg.followPointer) {
            this.node.classList.add("follow-tooltip");
            // 1) It is possible to have more than one viewers, and,
            // 2) A viewer may take a small are in the page, with an offset to top left.
            // So, we'd better register mouse move event to the target canvas, rather than document/window.
            if (this.target) {
                this.target.addEventListener("mousemove", this.follow);
            }
            else {
                document.addEventListener("mousemove", this.follow);
            }
        }
        this.parentNode.appendChild(this.node);
        !(cfg === null || cfg === void 0 ? void 0 : cfg.showOnCreate) && this.node.setAttribute("hidden", "");
    }
    setContent(content) {
        if (this.node.textContent) {
            this.node.textContent = null;
        }
        for (let i = 0; i < this.node.children.length; ++i) {
            const child = this.node.children[i];
            this.node.removeChild(child);
        }
        this.node.append(content);
        this.node.appendChild(this.childNode);
    }
    updateChildContent(content) {
        if (this.childNode.textContent) {
            this.childNode.textContent = null;
        }
        for (let i = 0; i < this.node.children.length; ++i) {
            const child = this.node.children[i];
            this.node.removeChild(child);
        }
        this.childNode.append(content);
    }
}

export { PopPanel, Tooltip };
//# sourceMappingURL=index.esm.js.map
