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
			<view class="circle-button">
				<image src="/static/music.png" class="music-icon" mode="aspectFit"></image>
			</view>
		</view>
		<view class="play-area">123123</view>
		<view class="section-bar">
			<slot />
			<slot />
			<slot />
			<slot />
			<slot />
		</view>

		<!-- <audio
			  id="bg-music"
			 style="text-align: left" 
			 :src="current.src" 
			 :poster="current.poster" 
			 :name="current.name" 
			 :author="current.author" 
			 :action="audioAction" 
			  loop></audio> -->
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.container {
		width: 80%;
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

				.music-icon {
					height: 66rpx;
					width: 66rpx;
				}
			}

		}

		.play-area {
			width: 100%;
			height: 100%;
			margin: 40rpx 0;
			background: rgba(255, 255, 255, .1);
		}
		.grid-cell{
			width: 50rpx;
			height: 50rpx;
			
		}
		.section-bar{
			width: 80%;
			height: 140rpx;
			background: rgba(255,255,255,.2);
		}
	}
</style>