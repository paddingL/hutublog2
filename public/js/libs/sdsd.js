/**
 * Created by Administrator on 2017/3/7.
 */
"D:\360安全浏览器下载\WebStorm10\webs\WebStorm 10.0.4\bin\runnerw.exe" "C:\Program Files\nodejs\node.exe" app.js
IncomingMessage {
    _readableState:
        ReadableState {
        objectMode: false,
            highWaterMark: 16384,
            buffer: [],
            length: 0,
            pipes: null,
            pipesCount: 0,
            flowing: true,
            ended: true,
            endEmitted: true,
            reading: false,
            sync: true,
            needReadable: false,
            emittedReadable: false,
            readableListening: false,
            resumeScheduled: false,
            defaultEncoding: 'utf8',
            ranOut: false,
            awaitDrain: 0,
            readingMore: false,
            decoder: null,
            encoding: null },
    readable: false,
        domain: null,
        _events:
    { error: [Function],
        aborted: [Function],
        data: [Function],
        end: [Function] },
    _eventsCount: 4,
        _maxListeners: undefined,
        socket:
    Socket {
        _connecting: false,
            _hadError: false,
            _handle:
        TCP {
            bytesRead: 3185,
                _externalStream: {},
            fd: -1,
                reading: true,
                owner: [Circular],
                onread: [Function: onread],
            onconnection: null,
                writeQueueSize: 0 },
        _parent: null,
            _host: null,
            _readableState:
        ReadableState {
            objectMode: false,
                highWaterMark: 16384,
                buffer: [],
                length: 0,
                pipes: null,
                pipesCount: 0,
                flowing: true,
                ended: false,
                endEmitted: false,
                reading: true,
                sync: false,
                needReadable: true,
                emittedReadable: false,
                readableListening: false,
                resumeScheduled: false,
                defaultEncoding: 'utf8',
                ranOut: false,
                awaitDrain: 0,
                readingMore: false,
                decoder: null,
                encoding: null },
        readable: true,
            domain: null,
            _events:
        { end: [Object],
            finish: [Function: onSocketFinish],
            _socketEnd: [Function: onSocketEnd],
            drain: [Object],
                timeout: [Function],
            error: [Object],
            close: [Object],
            data: [Function: socketOnData],
            resume: [Function: onSocketResume],
            pause: [Function: onSocketPause] },
        _eventsCount: 10,
            _maxListeners: undefined,
            _writableState:
        WritableState {
            objectMode: false,
                highWaterMark: 16384,
                needDrain: false,
                ending: false,
                ended: false,
                finished: false,
                decodeStrings: false,
                defaultEncoding: 'utf8',
                length: 0,
                writing: false,
                corked: 0,
                sync: false,
                bufferProcessing: false,
                onwrite: [Function],
                writecb: null,
                writelen: 0,
                bufferedRequest: null,
                lastBufferedRequest: null,
                pendingcb: 0,
                prefinished: false,
                errorEmitted: false,
                bufferedRequestCount: 0,
                corkedRequestsFree: [Object] },
        writable: true,
            allowHalfOpen: true,
            destroyed: false,
            _bytesDispatched: 21861,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server:
        Server {
            domain: null,
                _events: [Object],
                _eventsCount: 3,
                _maxListeners: undefined,
                _connections: 6,
                _handle: [Object],
                _usingSlaves: false,
                _slaves: [],
                _unref: false,
                allowHalfOpen: true,
                pauseOnConnect: false,
                httpAllowHalfOpen: false,
                timeout: 120000,
                _pendingResponseData: 0,
                _connectionKey: '6::::3000' },
        _server:
            Server {
            domain: null,
                _events: [Object],
                _eventsCount: 3,
                _maxListeners: undefined,
                _connections: 6,
                _handle: [Object],
                _usingSlaves: false,
                _slaves: [],
                _unref: false,
                allowHalfOpen: true,
                pauseOnConnect: false,
                httpAllowHalfOpen: false,
                timeout: 120000,
                _pendingResponseData: 0,
                _connectionKey: '6::::3000' },
        _idleTimeout: 120000,
            _idleNext:
        { [Function: utcDate]
            _onTimeout: [Function],
                _idleTimeout: 690,
            _idleNext: [Object],
            _idlePrev: [Circular],
            _idleStart: 18830,
            _called: true },
        _idlePrev: { _idleNext: [Circular], _idlePrev: [Object] },
        _idleStart: 18831,
            parser:
        HTTPParser {
            '0': [Function: parserOnHeaders],
            '1': [Function: parserOnHeadersComplete],
            '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
            '4': [Function: onParserExecute],
            _headers: [],
                _url: '',
                _consumed: true,
                socket: [Circular],
                incoming: [Circular],
                outgoing: null,
                maxHeaderPairs: 2000,
                onIncoming: [Function: parserOnIncoming] },
        on: [Function: socketOnWrap],
        _paused: false,
            read: [Function],
            _consuming: true,
            _httpMessage: null },
    connection:
        Socket {
        _connecting: false,
            _hadError: false,
            _handle:
        TCP {
            bytesRead: 3185,
                _externalStream: {},
            fd: -1,
                reading: true,
                owner: [Circular],
                onread: [Function: onread],
            onconnection: null,
                writeQueueSize: 0 },
        _parent: null,
            _host: null,
            _readableState:
        ReadableState {
            objectMode: false,
                highWaterMark: 16384,
                buffer: [],
                length: 0,
                pipes: null,
                pipesCount: 0,
                flowing: true,
                ended: false,
                endEmitted: false,
                reading: true,
                sync: false,
                needReadable: true,
                emittedReadable: false,
                readableListening: false,
                resumeScheduled: false,
                defaultEncoding: 'utf8',
                ranOut: false,
                awaitDrain: 0,
                readingMore: false,
                decoder: null,
                encoding: null },
        readable: true,
            domain: null,
            _events:
        { end: [Object],
            finish: [Function: onSocketFinish],
            _socketEnd: [Function: onSocketEnd],
            drain: [Object],
                timeout: [Function],
            error: [Object],
            close: [Object],
            data: [Function: socketOnData],
            resume: [Function: onSocketResume],
            pause: [Function: onSocketPause] },
        _eventsCount: 10,
            _maxListeners: undefined,
            _writableState:
        WritableState {
            objectMode: false,
                highWaterMark: 16384,
                needDrain: false,
                ending: false,
                ended: false,
                finished: false,
                decodeStrings: false,
                defaultEncoding: 'utf8',
                length: 0,
                writing: false,
                corked: 0,
                sync: false,
                bufferProcessing: false,
                onwrite: [Function],
                writecb: null,
                writelen: 0,
                bufferedRequest: null,
                lastBufferedRequest: null,
                pendingcb: 0,
                prefinished: false,
                errorEmitted: false,
                bufferedRequestCount: 0,
                corkedRequestsFree: [Object] },
        writable: true,
            allowHalfOpen: true,
            destroyed: false,
            _bytesDispatched: 21861,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server:
        Server {
            domain: null,
                _events: [Object],
                _eventsCount: 3,
                _maxListeners: undefined,
                _connections: 6,
                _handle: [Object],
                _usingSlaves: false,
                _slaves: [],
                _unref: false,
                allowHalfOpen: true,
                pauseOnConnect: false,
                httpAllowHalfOpen: false,
                timeout: 120000,
                _pendingResponseData: 0,
                _connectionKey: '6::::3000' },
        _server:
            Server {
            domain: null,
                _events: [Object],
                _eventsCount: 3,
                _maxListeners: undefined,
                _connections: 6,
                _handle: [Object],
                _usingSlaves: false,
                _slaves: [],
                _unref: false,
                allowHalfOpen: true,
                pauseOnConnect: false,
                httpAllowHalfOpen: false,
                timeout: 120000,
                _pendingResponseData: 0,
                _connectionKey: '6::::3000' },
        _idleTimeout: 120000,
            _idleNext:
        { [Function: utcDate]
            _onTimeout: [Function],
                _idleTimeout: 690,
            _idleNext: [Object],
            _idlePrev: [Circular],
            _idleStart: 18830,
            _called: true },
        _idlePrev: { _idleNext: [Circular], _idlePrev: [Object] },
        _idleStart: 18831,
            parser:
        HTTPParser {
            '0': [Function: parserOnHeaders],
            '1': [Function: parserOnHeadersComplete],
            '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
            '4': [Function: onParserExecute],
            _headers: [],
                _url: '',
                _consumed: true,
                socket: [Circular],
                incoming: [Circular],
                outgoing: null,
                maxHeaderPairs: 2000,
                onIncoming: [Function: parserOnIncoming] },
        on: [Function: socketOnWrap],
        _paused: false,
            read: [Function],
            _consuming: true,
            _httpMessage: null },
    httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers:
    { host: '127.0.0.1:3000',
        connection: 'keep-alive',
        'content-length': '0',
        accept: 'application/json, text/plain, */*',
        origin: 'http://127.0.0.1:3000',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
        referer: 'http://127.0.0.1:3000/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.8' },
    rawHeaders:
        [ 'Host',
            '127.0.0.1:3000',
            'Connection',
            'keep-alive',
            'Content-Length',
            '0',
            'Accept',
            'application/json, text/plain, */*',
            'Origin',
            'http://127.0.0.1:3000',
            'User-Agent',
            'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
            'Referer',
            'http://127.0.0.1:3000/',
            'Accept-Encoding',
            'gzip, deflate, br',
            'Accept-Language',
            'zh-CN,zh;q=0.8' ],
            trailers: {},
    rawTrailers: [],
        upgrade: false,
        url: '/digest?password=scscczxzxc&username=sdsds',
        method: 'POST',
        statusCode: null,
        statusMessage: null,
        client:
    Socket {
        _connecting: false,
            _hadError: false,
            _handle:
        TCP {
            bytesRead: 3185,
                _externalStream: {},
            fd: -1,
                reading: true,
                owner: [Circular],
                onread: [Function: onread],
            onconnection: null,
                writeQueueSize: 0 },
        _parent: null,
            _host: null,
            _readableState:
        ReadableState {
            objectMode: false,
                highWaterMark: 16384,
                buffer: [],
                length: 0,
                pipes: null,
                pipesCount: 0,
                flowing: true,
                ended: false,
                endEmitted: false,
                reading: true,
                sync: false,
                needReadable: true,
                emittedReadable: false,
                readableListening: false,
                resumeScheduled: false,
                defaultEncoding: 'utf8',
                ranOut: false,
                awaitDrain: 0,
                readingMore: false,
                decoder: null,
                encoding: null },
        readable: true,
            domain: null,
            _events:
        { end: [Object],
            finish: [Function: onSocketFinish],
            _socketEnd: [Function: onSocketEnd],
            drain: [Object],
                timeout: [Function],
            error: [Object],
            close: [Object],
            data: [Function: socketOnData],
            resume: [Function: onSocketResume],
            pause: [Function: onSocketPause] },
        _eventsCount: 10,
            _maxListeners: undefined,
            _writableState:
        WritableState {
            objectMode: false,
                highWaterMark: 16384,
                needDrain: false,
                ending: false,
                ended: false,
                finished: false,
                decodeStrings: false,
                defaultEncoding: 'utf8',
                length: 0,
                writing: false,
                corked: 0,
                sync: false,
                bufferProcessing: false,
                onwrite: [Function],
                writecb: null,
                writelen: 0,
                bufferedRequest: null,
                lastBufferedRequest: null,
                pendingcb: 0,
                prefinished: false,
                errorEmitted: false,
                bufferedRequestCount: 0,
                corkedRequestsFree: [Object] },
        writable: true,
            allowHalfOpen: true,
            destroyed: false,
            _bytesDispatched: 21861,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server:
        Server {
            domain: null,
                _events: [Object],
                _eventsCount: 3,
                _maxListeners: undefined,
                _connections: 6,
                _handle: [Object],
                _usingSlaves: false,
                _slaves: [],
                _unref: false,
                allowHalfOpen: true,
                pauseOnConnect: false,
                httpAllowHalfOpen: false,
                timeout: 120000,
                _pendingResponseData: 0,
                _connectionKey: '6::::3000' },
        _server:
            Server {
            domain: null,
                _events: [Object],
                _eventsCount: 3,
                _maxListeners: undefined,
                _connections: 6,
                _handle: [Object],
                _usingSlaves: false,
                _slaves: [],
                _unref: false,
                allowHalfOpen: true,
                pauseOnConnect: false,
                httpAllowHalfOpen: false,
                timeout: 120000,
                _pendingResponseData: 0,
                _connectionKey: '6::::3000' },
        _idleTimeout: 120000,
            _idleNext:
        { [Function: utcDate]
            _onTimeout: [Function],
                _idleTimeout: 690,
            _idleNext: [Object],
            _idlePrev: [Circular],
            _idleStart: 18830,
            _called: true },
        _idlePrev: { _idleNext: [Circular], _idlePrev: [Object] },
        _idleStart: 18831,
            parser:
        HTTPParser {
            '0': [Function: parserOnHeaders],
            '1': [Function: parserOnHeadersComplete],
            '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
            '4': [Function: onParserExecute],
            _headers: [],
                _url: '',
                _consumed: true,
                socket: [Circular],
                incoming: [Circular],
                outgoing: null,
                maxHeaderPairs: 2000,
                onIncoming: [Function: parserOnIncoming] },
        on: [Function: socketOnWrap],
        _paused: false,
            read: [Function],
            _consuming: true,
            _httpMessage: null },
    _consuming: true,
        _dumped: false,
        next: [Function: next],
    baseUrl: '',
        originalUrl: '/digest?password=scscczxzxc&username=sdsds',
        _parsedUrl:
    Url {
        protocol: null,
            slashes: null,
            auth: null,
            host: null,
            port: null,
            hostname: null,
            hash: null,
            search: '?password=scscczxzxc&username=sdsds',
            query: 'password=scscczxzxc&username=sdsds',
            pathname: '/digest',
            path: '/digest?password=scscczxzxc&username=sdsds',
            href: '/digest?password=scscczxzxc&username=sdsds',
            _raw: '/digest?password=scscczxzxc&username=sdsds' },
    params: {},
    query: { password: 'scscczxzxc', username: 'sdsds' },
    res:
        ServerResponse {
        domain: null,
            _events: { finish: [Function: resOnFinish] },
        _eventsCount: 1,
            _maxListeners: undefined,
            output: [],
            outputEncodings: [],
            outputCallbacks: [],
            outputSize: 0,
            writable: true,
            _last: false,
            chunkedEncoding: false,
            shouldKeepAlive: true,
            useChunkedEncodingByDefault: true,
            sendDate: true,
            _removedHeader: { 'content-length': false },
        _contentLength: 1,
            _hasBody: true,
            _trailer: '',
            finished: true,
            _headerSent: true,
            socket: null,
            connection: null,
            _header: 'HTTP/1.1 200 OK\r\nX-Powered-By: Express\r\nContent-Type: text/html; charset=utf-8\r\nContent-Length: 1\r\nETag: W/"1-NWoZK3kTsExUV00Ywo1G5jlUKKs"\r\nDate: Mon, 06 Mar 2017 17:58:53 GMT\r\nConnection: keep-alive\r\n\r\n',
            _headers:
        { 'x-powered-by': 'Express',
            'content-type': 'text/html; charset=utf-8',
            'content-length': '1',
            etag: 'W/"1-NWoZK3kTsExUV00Ywo1G5jlUKKs"' },
        _headerNames:
        { 'x-powered-by': 'X-Powered-By',
            'content-type': 'Content-Type',
            'content-length': 'Content-Length',
            etag: 'ETag' },
        _onPendingData: [Function: updateOutgoingData],
        req: [Circular],
            locals: {},
        statusMessage: 'OK',
            statusCode: 200 },
    route: Route { path: '/digest', stack: [ [Object] ], methods: { post: true } },
    read: [Function] }
undefined
undefined

