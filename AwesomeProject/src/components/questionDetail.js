import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

const AlbumDetail = ({ question }) => {
    const { title, artist, thumbnail_image, image, url } = question;
    const { thumbnailStyle,
        headerContainerStyle,
        textContainerStyle,
        thumbnailContainerStyle,
        titleStyle,
        imageStyle
    } = styles;
    return (
        <Card>
            <CardSection style={headerContainerStyle}>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={textContainerStyle}>
                    <Text style={titleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection style={headerContainerStyle}>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection style={headerContainerStyle}>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy now
                </Button> 
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContainerStyle: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    textContainerStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    titleStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }

};

export default AlbumDetail;
