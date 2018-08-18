# Language Plugins

This repository represents a spike into writing language plugins for vscode /
monaco, using a simple SQL-like language AQL (Analaytics Query Language) as the
proof of concept language.

# Notes

Some lessons learnt from this spike

- vscode and monaco have different APIs, and are not compatible -
  https://github.com/Microsoft/monaco-editor/issues/430
- vscode uses text mate for syntax highlighting
- monaco uses its own custom json format for syntax highlighting

# Useful Resources

- https://code.visualstudio.com/docs/extensions/yocode
- https://microsoft.github.io/monaco-editor/monarch.html
