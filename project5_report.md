# Project 5: History Tracking

## Recording

(Video may not render on all markdown viewers. I use VSCode's markdown preview
to render `.md` documents, which supports this.)

<video width="1280" height="720" controls>
  <source src="media/pathTracing.mp4" type="video/mp4">
</video>

## Notes

- There is an odd bug when reading the new coordinates and normals that makes
some parts of the history tracking fail. I noticed that the bug is related to
reading the previous buffer for specific coordinates.
