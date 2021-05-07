ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32630").setExtent([-262122.590220, 417601.039323, 894627.422970, 989670.669236]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Avril_2021_1 = new ol.format.GeoJSON();
var features_Avril_2021_1 = format_Avril_2021_1.readFeatures(json_Avril_2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Avril_2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Avril_2021_1.addFeatures(features_Avril_2021_1);
var lyr_Avril_2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Avril_2021_1, 
                style: style_Avril_2021_1,
                interactive: true,
                title: '<img src="styles/legend/Avril_2021_1.png" /> Avril_2021'
            });
var format_Avril_2021_2_2 = new ol.format.GeoJSON();
var features_Avril_2021_2_2 = format_Avril_2021_2_2.readFeatures(json_Avril_2021_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Avril_2021_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Avril_2021_2_2.addFeatures(features_Avril_2021_2_2);
var lyr_Avril_2021_2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Avril_2021_2_2, 
                style: style_Avril_2021_2_2,
                interactive: true,
                title: '<img src="styles/legend/Avril_2021_2_2.png" /> Avril_2021_2'
            });
var format_Avril_kafolo_3 = new ol.format.GeoJSON();
var features_Avril_kafolo_3 = format_Avril_kafolo_3.readFeatures(json_Avril_kafolo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Avril_kafolo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Avril_kafolo_3.addFeatures(features_Avril_kafolo_3);
var lyr_Avril_kafolo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Avril_kafolo_3, 
                style: style_Avril_kafolo_3,
                interactive: true,
                title: '<img src="styles/legend/Avril_kafolo_3.png" /> Avril_kafolo'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Avril_2021_1.setVisible(true);lyr_Avril_2021_2_2.setVisible(true);lyr_Avril_kafolo_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Avril_2021_1,lyr_Avril_2021_2_2,lyr_Avril_kafolo_3];
lyr_Avril_2021_1.set('fieldAliases', {'NOM': 'NOM', 'Lien': 'Lien', });
lyr_Avril_2021_2_2.set('fieldAliases', {'Field1': 'Field1', 'lien': 'lien', });
lyr_Avril_kafolo_3.set('fieldAliases', {'Field1': 'Field1', 'lien': 'lien', });
lyr_Avril_2021_1.set('fieldImages', {'NOM': 'TextEdit', 'Lien': 'TextEdit', });
lyr_Avril_2021_2_2.set('fieldImages', {'Field1': 'TextEdit', 'lien': 'TextEdit', });
lyr_Avril_kafolo_3.set('fieldImages', {'Field1': 'TextEdit', 'lien': 'TextEdit', });
lyr_Avril_2021_1.set('fieldLabels', {'NOM': 'no label', 'Lien': 'inline label', });
lyr_Avril_2021_2_2.set('fieldLabels', {'Field1': 'no label', 'lien': 'inline label', });
lyr_Avril_kafolo_3.set('fieldLabels', {'Field1': 'no label', 'lien': 'inline label', });
lyr_Avril_kafolo_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});