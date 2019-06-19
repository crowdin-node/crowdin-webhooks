# crowdin-webhooks

An experimental webserver for inspecting Crowdin webhooks.

https://support.crowdin.com/webhooks/

This is what events look like:

```js
{
  event: 'suggestion.added',
  project: 'github-help-docs',
  project_id: '310081',
  language: 'es-xl',
  source_string_id: '0f2e797783753a9749dbef2731740c2d',
  translation_id: '982776',
  user: 'ESLA_GH5',
  user_id: '13877331',
  file_id: '23530',
  file: '/master/content/desktop/contributing-to-projects/reverting-a-commit.md'
}

{
  event: 'translation.updated',
  project: 'github-help-docs',
  project_id: '310081',
  language: 'es-xl',
  source_string_id: '1470d5a0d3fe7c60230453c0b57ce90d',
  old_translation_id: '980892',
  new_translation_id: '982780',
  user: 'ESLA_GH5',
  user_id: '13877331',
  file_id: '23530',
  file: '/master/content/desktop/contributing-to-projects/reverting-a-commit.md'
}
```

## Usage

```
npm start
```

## License

MIT
