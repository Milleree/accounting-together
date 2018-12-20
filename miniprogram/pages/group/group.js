// pages/group/group.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupList: [],
    loadingGroupList: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const self = this
    self.setData({
      loadingGroupList: true
    })
    wx.cloud.callFunction({
      name: 'getGroup',
      data: {},
      success(res) {
        console.log('成功调用组列表', res)
        self.setData({
          groupList: res.result
        })
      },
      complete () {
        self.setData({
          loadingGroupList: false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  goToGroupDetail (event) {
    console.log(event)
    app.globalData.currentGroupInfo = event.currentTarget.dataset.group
    wx.navigateTo({
      url: `/pages/groupDetail/groupDetail`
    })
  }
})