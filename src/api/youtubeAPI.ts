import axios from 'axios';

import {
    type AllVideosFromChannelResponseType,
    type PlaylistIDResponseType, PlaylistResponseType,
    type VideosFromPLResponseType,
} from './youtubeAPI.types.ts';

const API_KEY = 'AIzaSyBFaXhJJEA4mz6fqbk66sM3Bb9cp55bQo0'; // env
const CHANNEL_ID = 'UC3w6lpvEkOH6LDl0m_YJrUw'; // env
const PLAYLIST_ID = 'PLhslMUXu5Wn7UTXuoqiwndoOfdGxTgCKm'; // env



const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        key: API_KEY,
        part: 'contentDetails, snippet',
        playlistId: PLAYLIST_ID,
        maxResults: 50,
    },
    headers: {},
});

const instance1 = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        key: API_KEY,
        part: 'contentDetails',
        id: CHANNEL_ID,
    },
    headers: {},
});

const instance2 = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        key: API_KEY,
        part: 'contentDetails',
        maxResults: 50,
    },
    headers: {},
});

const instance3 = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        key: API_KEY,
        // part: 'contentDetails, fileDetails, id, liveStreamingDetails, localizations, player, processingDetails, recordingDetails, snippet, statistics, status, suggestions, topicDetails',
        part: 'snippet, player',
    },
    headers: {},
});

export const youtubeAPI = {
    async getPlaylistID() {
        return await instance1.get<PlaylistIDResponseType>('channels');
    },
    async getPlaylist() {
        return await instance.get<PlaylistResponseType>('playlistItems');
    },
    async getVideosFromPl(id: string) {
        return await instance2.get<VideosFromPLResponseType>(`playlistItems?playlistId=${id}&amp;`);
    },
    async getAllVideosFromChannel(id: string) {
        return await instance3.get<AllVideosFromChannelResponseType>(`videos?id=${id}&amp;`);
    },
};
