# jsdom-problem

Demonstration and experimentation for problem of JSDOM.

## Log

|key|value|
|:---:|:----|
|PC|GPD WIN 2|
|CPU|intel Core m3 7Y30|
|RAM|8GB|
|OS|Windows 10 Pro|

```
PS> npm start

> jsdom-problem@0.1.0 start C:\Users\kurone-kito\src\my\jsdom-problem
> node index.js

start: ./safe.css
CSSStyleDeclaration {
  '0': 'display',
  '1': 'margin',
  _values:
   { display: 'block',
     margin: '8px',
     'margin-top': '8px',
     'margin-right': '8px',
     'margin-bottom': '8px',
     'margin-left': '8px' },
  _importants: { display: '', margin: '' },
  _length: 2,
  _onChange: [Function] }
done: ./safe.css
start: ./problem.css

<--- Last few GCs --->

[16372:00000230515A9100]    34690 ms: Scavenge 1390.2 (1423.8) -> 1389.5 (1424.3) MB, 3.3 / 0.0 ms  (ave[16372:00000230515A9100]    34695 ms: Scavenge 1390.3 (1424.3) -> 1389.6 (1424.8) MB, 3.4 / 0.0 ms  (ave
rage mu = 0.109, current mu = 0.056) allocation failure
[16372:00000230515A9100]    34701 ms: Scavenge 1390.5 (1424.8) -> 1389.8 (1425.3) MB, 3.4 / 0.0 ms  (ave
rage mu = 0.109, current mu = 0.056) allocation failure


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 000003EBBB9D0461]
    1: StubFrame [pc: 000003EBBB9D2ED8]
    2: StubFrame [pc: 000003EBBB9C41E0]
Security context: 0x00309539d949 <JSObject>
    3: match [000000309538F3D1](this=0x000f4141f929 <String[28]:  _:-ms-lang(x)::-ms-backdrop>,0x000f414
1f8d1 <JSRegExp <String[20]: ^[\x20\t\r\n\f]+(.*)>>)
    4: compileSelector [0000000F4141F951] [C:\Users\kurone-kito\src\my\jsdom-problem\node_modules\nwsapi
\src\nwsapi.js:~7...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory

Writing Node.js report to file: report.20190215.234127.16372.001.json
Node.js report completed
 1: 00007FF65951D50A public: __cdecl v8::internal::GCIdleTimeHandler::GCIdleTimeHandler(void) __ptr64+46
18
 2: 00007FF6594C4F86 uv_loop_fork+79446
 3: 00007FF6594C5C21 uv_loop_fork+82673
 4: 00007FF6599CCAEE void __cdecl v8::internal::FatalProcessOutOfMemory(class v8::internal::Isolate * __
ptr64,char const * __ptr64)+798
 5: 00007FF6599CCA27 void __cdecl v8::internal::FatalProcessOutOfMemory(class v8::internal::Isolate * __
ptr64,char const * __ptr64)+599
 6: 00007FF659CA5844 public: static bool __cdecl v8::internal::Heap::RootIsImmortalImmovable(int)+14788
 7: 00007FF659C9B484 public: bool __cdecl v8::internal::Heap::CollectGarbage(enum v8::internal::Allocati
onSpace,enum v8::internal::GarbageCollectionReason,enum v8::GCCallbackFlags) __ptr64+7556
 8: 00007FF659C99B58 public: bool __cdecl v8::internal::Heap::CollectGarbage(enum v8::internal::Allocati
onSpace,enum v8::internal::GarbageCollectionReason,enum v8::GCCallbackFlags) __ptr64+1112
 9: 00007FF659CA34C7 public: static bool __cdecl v8::internal::Heap::RootIsImmortalImmovable(int)+5703
10: 00007FF659CA3546 public: static bool __cdecl v8::internal::Heap::RootIsImmortalImmovable(int)+5830
11: 00007FF6598643E1 public: class v8::internal::Handle<class v8::internal::HeapObject> __cdecl v8::inte
rnal::Factory::NewFillerObject(int,bool,enum v8::internal::AllocationSpace) __ptr64+49
12: 00007FF659FBF32A public: static int __cdecl v8::internal::StoreBuffer::StoreBufferOverflow(class v8:
:internal::Isolate * __ptr64)+26826
13: 000003EBBB9D0461
npm ERR! code ELIFECYCLE
npm ERR! errno 134
npm ERR! jsdom-problem@0.1.0 start: `node index.js`
npm ERR! Exit status 134
npm ERR!
npm ERR! Failed at the jsdom-problem@0.1.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\kurone-kito\AppData\Roaming\npm-cache\_logs\2019-02-15T14_41_28_340Z-debug.log
```