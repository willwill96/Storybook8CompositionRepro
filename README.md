# Storybook 8 Composition Repro

This repo is a reproduction of the issue [described here](https://github.com/storybookjs/storybook/discussions/25276#discussioncomment-8654643).

This repo contains four boilerplate storybook apps where the one in `storybook-1/` serves as a main storybook that references the other three storybook apps.

All of these apps were generated with the following command, selecting react & vite as the framework.

```
npx storybook@next init
```


# Instructions to Reproduce Error

1. Build and start app
```
docker build -t storybook8compositionrepro .

docker run -p 3003:3003 storybook8compositionrepro
```

Navigate to http://localhost:3003/main-storybook & note that only two composed storybooks ever load on the page.