# Project 5: History Tracking

## Screenshot

![History Tracking Screenshot](media/historyTrackingScreenshot.png)

## Recording

(Video may not render on all markdown viewers. I use VSCode's markdown preview
to render `.md` documents, which supports this.)

<video width="1280" height="720" controls>
  <source src="media/historyTracking.mp4" type="video/mp4">
</video>

## Notes

- The history tracking is implemented as stated in the document, but it is not
  functioning as expected. The image looks fine for the first frame, but
  turning the camera will make the image distort. It does keep the history, but
  it gets mapped wrong it looks like, which makes it come out wrong.
- There is an odd bug when reading the new coordinates and normals that is
  causing the above issues. I noticed that the bug is related to reading the
  previous buffer for specific coordinates. I verified that the buffer is
  created and populated correctly. It happens when running the read in the
  subsequent frame.
