# Demonstration and experimentation for problem of [jsdom](https://github.com/jsdom/jsdom)

__`_:-ms-lang(x)::-ms-backdrop`__ is well-known CSS hack for Internet Explorer 11. Writing it in the _middle of the descendant selector_, and call `window.getComputedStyle()` of [jsdom](https://github.com/jsdom/jsdom), will cause nodeJS to crash with out of memory.

This project is demonstration experiment for reproducing it.

```sh
$ npm i; npm start
```

----

## Log

### PC 1

|key|value|
|:---:|:----|
|PC|Mac mini late 2012|
|CPU|intel Core i7 3610QM|
|RAM|16GB|
|OS|macOS Mojave v10.14.3|
|NodeJS|v11.2.0|

```
$ npm start

> jsdom-problem@0.1.0 start /Users/kurone-kito/src/my/jsdom-problem
> node index.js

start: ./resource/safe.css
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
done: ./resource/safe.css
start: ./resource/problem.css

<--- Last few GCs --->

[44292:0x104800000]    32275 ms: Scavenge 1390.1 (1423.7) -> 1389.4 (1424.2) MB, 2.4 / 0.0 ms  (average mu = 0.154, current mu = 0.106) allocation failure 
[44292:0x104800000]    32278 ms: Scavenge 1390.2 (1424.2) -> 1389.6 (1424.7) MB, 2.5 / 0.0 ms  (average mu = 0.154, current mu = 0.106) allocation failure 
[44292:0x104800000]    32282 ms: Scavenge 1390.4 (1424.7) -> 1389.7 (1425.2) MB, 2.5 / 0.0 ms  (average mu = 0.154, current mu = 0.106) allocation failure 


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 0x21fd59d4fb7d]
Security context: 0x234fd719d9f1 <JSObject>
    1: compileSelector [0x234fa73b5479] [/Users/kurone-kito/src/my/jsdom-problem/node_modules/nwsapi/src/nwsapi.js:~755] [pc=0x21fd59dcfd62](this=0x234f9b987bb1 <JSGlobal Object>,0x234f4f544c99 <String[36]: .article _:-ms-lang(x)::-ms-backdrop>,0x234fd23065c9 <Very long string[2045226]>,0x234fed602801 <false>,0x234fed6025b1 <undefined>,0x234fed602801 <false>...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0x10005eeab node::Abort() [/usr/local/bin/node]
 2: 0x10005f68a node::FatalTryCatch::~FatalTryCatch() [/usr/local/bin/node]
 3: 0x100172027 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
 4: 0x100171fc8 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
 5: 0x100433768 v8::internal::Heap::UpdateSurvivalStatistics(int) [/usr/local/bin/node]
 6: 0x100435185 v8::internal::Heap::CheckIneffectiveMarkCompact(unsigned long, double) [/usr/local/bin/node]
 7: 0x100432afd v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/usr/local/bin/node]
 8: 0x1004318f3 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/usr/local/bin/node]
 9: 0x1004397c1 v8::internal::Heap::AllocateRawWithLightRetry(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [/usr/local/bin/node]
10: 0x100439810 v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [/usr/local/bin/node]
11: 0x100419bd7 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationSpace) [/usr/local/bin/node]
12: 0x1005f761a v8::internal::Runtime_AllocateInNewSpace(int, v8::internal::Object**, v8::internal::Isolate*) [/usr/local/bin/node]
13: 0x21fd59d4fb7d 
Abort trap: 6
```

### PC 2

|key|value|
|:---:|:----|
|PC|GPD WIN 2|
|CPU|intel Core m3 7Y30|
|RAM|8GB|
|OS|Windows 10 Pro v1809|
|NodeJS|v11.10.0|

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