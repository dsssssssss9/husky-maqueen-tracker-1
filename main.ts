huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
basic.forever(function () {
    huskylens.request()
    huskylens.writeOSD(convertToText(huskylens.readeBox(1, Content1.xCenter)), 150, 30)
})
