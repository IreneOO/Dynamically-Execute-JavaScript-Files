# Dynamically-Execute-JavaScript-Files

Suppose sourceA.ts and sourceB.ts have a same function getSource.
I execute getSource from sourceA.ts and sourceB.ts in execute.ts without doing import sourceA.ts and import sourceA.ts.

Instead, I dynamically execute them by using

```
await import(`source file path`).getSource();
```
