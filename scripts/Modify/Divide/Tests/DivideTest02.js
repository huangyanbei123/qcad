// Auto generated by Testing Dashboard
// File        : scripts/Modify/Divide/Tests/DivideTest02.js
// Timestamp   : 2015-11-10 14:54:55
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function DivideTest02() {
    TdbTest.call(this, 'scripts/Modify/Divide/Tests/DivideTest02.js');
}

DivideTest02.prototype = new TdbTest();

DivideTest02.prototype.test00 = function() {
    qDebug('running DivideTest02.test00()...');
    this.setUp();
    this.importFile('scripts/Modify/Divide/Tests/data/polylines.dxf');
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::MainToolsPanel::ModifyToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::ModifyToolsPanel::DivideButton');
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(35.450893, 63.220026);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(19.595026, 66.033163);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(24.709821, 60.918367);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(19.339286, 58.616709);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(22.663903, 51.455995);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(19.339286, 50.433036);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(22.663903, 45.31824);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(19.850765, 43.783801);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(24.198342, 36.367347);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(19.595026, 35.344388);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(23.942602, 31.508291);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(19.595026, 32.27551);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(23.686862, 24.091837);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(19.595026, 22.557398);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(23.942602, 18.465561);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(20.106505, 18.721301);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(24.965561, 13.862245);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(20.106505, 13.095026);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(24.198342, 4.655612);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(19.083546, 6.445791);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(23.431122, -3.272321);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(19.339286, -4.80676);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(24.709821, -10.433036);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(19.850765, -8.898597);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(23.942602, -18.10523);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(20.362245, -19.639668);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(23.431122, -25.777423);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(20.362245, -23.220026);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.verifyDrawing('DivideTest02_000.dxf');
    this.tearDown();
    qDebug('finished DivideTest02.test00()');
};

