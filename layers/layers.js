ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32630").setExtent([137655.554105, 728259.645438, 421181.928212, 868477.346805]);
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
var format_region_1 = new ol.format.GeoJSON();
var features_region_1 = format_region_1.readFeatures(json_region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_region_1.addFeatures(features_region_1);
var lyr_region_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_region_1, 
                style: style_region_1,
                interactive: true,
                title: '<img src="styles/legend/region_1.png" /> region'
            });
var format_Avril_2021_2 = new ol.format.GeoJSON();
var features_Avril_2021_2 = format_Avril_2021_2.readFeatures(json_Avril_2021_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Avril_2021_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Avril_2021_2.addFeatures(features_Avril_2021_2);
var lyr_Avril_2021_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Avril_2021_2, 
                style: style_Avril_2021_2,
                interactive: true,
                title: '<img src="styles/legend/Avril_2021_2.png" /> Avril_2021'
            });
var format_Avril_2021_2_3 = new ol.format.GeoJSON();
var features_Avril_2021_2_3 = format_Avril_2021_2_3.readFeatures(json_Avril_2021_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Avril_2021_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Avril_2021_2_3.addFeatures(features_Avril_2021_2_3);
var lyr_Avril_2021_2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Avril_2021_2_3, 
                style: style_Avril_2021_2_3,
                interactive: true,
                title: '<img src="styles/legend/Avril_2021_2_3.png" /> Avril_2021_2'
            });
var format_Avril_kafolo_4 = new ol.format.GeoJSON();
var features_Avril_kafolo_4 = format_Avril_kafolo_4.readFeatures(json_Avril_kafolo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Avril_kafolo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Avril_kafolo_4.addFeatures(features_Avril_kafolo_4);
var lyr_Avril_kafolo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Avril_kafolo_4, 
                style: style_Avril_kafolo_4,
                interactive: true,
                title: '<img src="styles/legend/Avril_kafolo_4.png" /> Avril_kafolo'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_region_1.setVisible(true);lyr_Avril_2021_2.setVisible(true);lyr_Avril_2021_2_3.setVisible(true);lyr_Avril_kafolo_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_region_1,lyr_Avril_2021_2,lyr_Avril_2021_2_3,lyr_Avril_kafolo_4];
lyr_region_1.set('fieldAliases', {'NOM': 'NOM', });
lyr_Avril_2021_2.set('fieldAliases', {'NOM': 'NOM', 'Lien': 'Lien', });
lyr_Avril_2021_2_3.set('fieldAliases', {'Field1': 'Field1', 'lien': 'lien', });
lyr_Avril_kafolo_4.set('fieldAliases', {'Field1': 'Field1', 'lien': 'lien', });
lyr_region_1.set('fieldImages', {'NOM': 'TextEdit', });
lyr_Avril_2021_2.set('fieldImages', {'NOM': 'TextEdit', 'Lien': 'TextEdit', });
lyr_Avril_2021_2_3.set('fieldImages', {'Field1': 'TextEdit', 'lien': 'TextEdit', });
lyr_Avril_kafolo_4.set('fieldImages', {'Field1': 'TextEdit', 'lien': 'TextEdit', });
lyr_region_1.set('fieldLabels', {'NOM': 'no label', });
lyr_Avril_2021_2.set('fieldLabels', {'NOM': 'no label', 'Lien': 'inline label', });
lyr_Avril_2021_2_3.set('fieldLabels', {'Field1': 'no label', 'lien': 'inline label', });
lyr_Avril_kafolo_4.set('fieldLabels', {'Field1': 'no label', 'lien': 'inline label', });
lyr_Avril_kafolo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});