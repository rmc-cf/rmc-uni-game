"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const isPlaying = common_vendor.ref(false);
    const audioAction = common_vendor.ref({
      method: "pause"
      // 初始状态设为暂停
    });
    const gridData = common_vendor.ref([]);
    const initGame = () => {
      const newGrid = [];
      for (let row = 0; row < 4; row++) {
        const rowData = [];
        for (let col = 0; col < 4; col++) {
          rowData.push({});
        }
        newGrid.push(rowData);
      }
      gridData.value = newGrid;
    };
    common_vendor.onMounted(() => {
      initGame();
    });
    const togglePlay = () => {
      if (isPlaying.value) {
        common_vendor.index.__f__("log", "at pages/index/index.vue:70", "切换至暂停");
        audioAction.value = {
          method: "pause"
        };
      } else {
        common_vendor.index.__f__("log", "at pages/index/index.vue:76", "切换至播放");
        audioAction.value = {
          method: "play"
        };
      }
      isPlaying.value = !isPlaying.value;
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: isPlaying.value ? "running" : "paused",
        c: common_vendor.o(togglePlay),
        d: common_vendor.f(gridData.value, (row, rowIndex, i0) => {
          return {
            a: common_vendor.f(row, (cell, colIndex, i1) => {
              return {
                a: rowIndex + colIndex
              };
            }),
            b: rowIndex
          };
        }),
        e: common_assets._imports_1,
        f: audioAction.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
