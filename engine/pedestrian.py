import numpy as np
import cv2
import matplotlib.pyplot as plt

# Oxford Martin School Webcam - Broad Street, Oxford
# https://www.youtube.com/watch?v=St7aTfoIdYQ
capture = cv2.VideoCapture('video1.mp4')
length = int(capture.get(cv2.CAP_PROP_FRAME_COUNT))

output = np.zeros((int(capture.get(cv2.CAP_PROP_FRAME_HEIGHT)), int(capture.get(cv2.CAP_PROP_FRAME_WIDTH))), np.uint8)

background_subtractor = cv2.createBackgroundSubtractorMOG2()

for i in range(120):
    ret, frame = capture.read()
    filter = background_subtractor.apply(frame)
    cv2.imwrite('./frame.jpg', frame)
    cv2.imwrite('./diff-bkgnd-frame.jpg', filter)

    ret, th = cv2.threshold(filter, 2, 2, cv2.THRESH_BINARY)
    output = cv2.add(output, th)
    cv2.imwrite('./mask.jpg', output)

# Load the mask image
mask = plt.imread('./mask.jpg')

# Apply a colormap to the mask (e.g., viridis, jet, or gray)
cmap = plt.get_cmap('viridis')  # You can change the colormap as desired
colored_mask = cmap(mask)

# Display the colored mask
plt.imshow(colored_mask)
plt.colorbar()  # Add a colorbar to the plot to show the mapping of intensity values to colors
plt.show()
