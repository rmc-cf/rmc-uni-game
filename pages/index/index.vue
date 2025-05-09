<template>
	<view class="container">
		<view class="head">
			<view class="head-left">
				<view class="game-header">
					趣味消除
				</view>
				<view class="info-panel">
					剩余卡片：<span>0</span>
				</view>
			</view>

			<!-- 音乐按钮 -->
			<view class="circle-button" :style="{ animationPlayState: isPlaying ? 'running' : 'paused' }"
				@click="togglePlay">
				<image src="/static/music.png" class="music-icon" mode="aspectFit"></image>
			</view>
		</view>
		<view class="play-area">
			<template v-for="(row, rowIndex) in gridData" :key="rowIndex">
				<view v-for="(cell, colIndex) in row" :key="rowIndex+ colIndex" class="grid-cell">

				</view>
			</template>
		</view>
		<view class="section-bar">
			<view class="slot" />
			<view class="slot" />
			<view class="slot" />
			<view class="slot" />
			<view class="slot" />
		</view>

		<audio style="text-align: left" src="/static/music/99.mp3" :action="audioAction" loop></audio>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue';
	const isPlaying = ref(false)
	const symbols = ['1', '2', '3']
	const audioAction = ref({
		method: 'pause' // 初始状态设为暂停
	});
	const gridData = ref([])
	// 初始化游戏网格
	const initGrid = () => {
		const newGrid = [];
		for (let row = 0; row < 4; row++) {
			const rowData = [];
			for (let col = 0; col < 4; col++) {
				rowData.push({

				});
			}
			newGrid.push(rowData);
		}
		gridData.value = newGrid;

	};
	const initCard = (level = 1)=>{
		 const layout = Array.from({ length: 4 }, () => Array(4).fill({ 
		    hasCard: false,
		    cardType: 0,
		    matched: false
		  }))
	}
	onMounted(() => {
		initGrid()
		initCard()
	})
	const togglePlay = () => {
		if (isPlaying.value) {
			// 当前正在播放，切换到暂停
			console.log('切换至暂停');
			audioAction.value = {
				method: 'pause'
			};
		} else {
			// 当前暂停，切换到播放
			console.log('切换至播放');
			audioAction.value = {
				method: 'play'
			};
		}
		isPlaying.value = !isPlaying.value;
	};
	const isValid = (row,col,layout) =>{
		return [
			layout[row][col-1],
			layout[row-1]?.[col-1],
			layout[row-1]?.[col],
			layout[row-1]?.[col+1],
		].includes(1)
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 90%;
		margin: 0 auto;

		.head {
			display: flex;
			justify-content: space-between;

			.head-left {
				display: flex;
				flex-direction: column;

				.game-header {
					color: #fff;
					text-shadow: 4rpx 4rpx 8rpx rgba(0, 0, 0, .5);
					margin: 40rpx 0;
					font-size: 2.5em;
				}

				.info-panel {
					color: #fff;
					margin: 20rpx 0;
					font-size: 1.2em;
				}
			}

			.circle-button {
				align-self: flex-end;
				justify-self: end;
				width: 100rpx;
				height: 100rpx;
				background: linear-gradient(135deg, #fc758c 30%, #f79156 70%);
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 48rpx;
				box-shadow: 0 8rpx 12rpx rgba(0, 0, 0, .3);
				transition: transform 0.3s ease-in-out;
				animation: spin 3s linear infinite;
				animation-play-state: paused;

				/* 默认暂停 */
				.music-icon {
					height: 66rpx;
					width: 66rpx;
				}
			}

		}

		.play-area {
			width: 100%;
			aspect-ratio: 1/1;
			margin: 40rpx 0;
			box-sizing: border-box;
			background: rgba(255, 255, 255, .1);
		}

		.grid-cell {
			width: 25%;
			height: 25%;
			border: 2rpx solid #eee;
			float: left;
			box-sizing: border-box;
		}

		.section-bar {
			width: 100%;
			box-sizing: border-box;
			background: rgba(255, 255, 255, .2);
			border-radius: 20rpx;
			margin: 60rpx 0;
			padding: 20rpx;
			display: flex;
			justify-content: space-between;
			gap: 20rpx;
			backdrop-filter: blur(10rpx);
			border: 4rpx dashed rgba(255, 255, 255, .5);

			.slot {
				width: 100rpx;
				height: 100rpx;
				background: rgba(255, 255, 255, .5);
				border-radius: 16rpx;
				box-shadow: 0 6rpx 12rpx rgba(0, 0, 0, .2);
			}
		}
	}

	// 自定义动画
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	.tile {
		width: 50rpx;
		height: 50rpx;
		background: linear-gradient(145deg, #fff, #fofof0f);
		position: absolute;
		border-radius: 16rpx;
		box-shadow: 0 6rpx 12rpx rgba(0, 0, 0, .2);
		cursor: pointer;
		transition: all 0.2s;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 48rpx;
		color: #2c3e50;

		.tile:hover {
			transform: translateY(-3px);
			box-shadow: 0 10rpx 20rpx rgba(0, 0, 0, .3);

			.tile::before {
				content: '',
					position: absolute;
				top: 4rpx;
				left: 4rpx;
				right: 4rpx;
				bottom: 4rpx: border: 4rpx solid rgba(255 255 255 .5);
				border-radius: 12rpx;
			}
		}
	}
</style>