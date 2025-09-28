# Project 1 First Light

## GLFW required extensions

- VK_KHR_surface
- VK_KHR_wayland_surface

## InstanceLayer count

- 6

## Available Layers

- VK_LAYER_NV_optimus
- VK_LAYER_NV_present
- VK_LAYER_LUNARG_api_dump
- VK_LAYER_LUNARG_monitor
- VK_LAYER_LUNARG_screenshot
- VK_LAYER_KHRONOS_validation

## Available Extensions

### InstanceExtensions count

**24**

### Instance Extensions

- VK_KHR_device_group_creation
- VK_KHR_display
- VK_KHR_external_fence_capabilities
- VK_KHR_external_memory_capabilities
- VK_KHR_external_semaphore_capabilities
- VK_KHR_get_display_properties2
- VK_KHR_get_physical_device_properties2
- VK_KHR_get_surface_capabilities2
- VK_KHR_surface
- VK_KHR_surface_protected_capabilities
- VK_KHR_wayland_surface
- VK_KHR_xcb_surface
- VK_KHR_xlib_surface
- VK_EXT_acquire_drm_display
- VK_EXT_acquire_xlib_display
- VK_EXT_debug_report
- VK_EXT_debug_utils
- VK_EXT_direct_mode_display
- VK_EXT_display_surface_counter
- VK_EXT_surface_maintenance1
- VK_EXT_swapchain_colorspace
- VK_NV_display_stereo
- VK_KHR_portability_enumeration
- VK_LUNARG_direct_driver_loading

## GPUs

_Note: I have disabled all Vulkan icd files other than for this GPU. There's a
bug in Distrobox that causes the vulkan icds to fail to link correctly so I
have to manually specify the icd file to use my Nvidia GPU._

- 1 devices
- Device NVIDIA GeForce RTX 4080 Laptop GPU selected

## Queues

**Queue family count: 6**

### Queue List

- Queue Index: 0
  - Queue count: 16
  - Flags:
    - VK_QUEUE_GRAPHICS_BIT: true
    - VK_QUEUE_COMPUTE_BIT: true
    - VK_QUEUE_TRANSFER_BIT: true
- Queue Index: 0
  - Queue count: 2
  - Flags:
    - VK_QUEUE_GRAPHICS_BIT: false
    - VK_QUEUE_COMPUTE_BIT: false
    - VK_QUEUE_TRANSFER_BIT: true
- Queue Index: 0
  - Queue count: 8
  - Flags:
    - VK_QUEUE_GRAPHICS_BIT: false
    - VK_QUEUE_COMPUTE_BIT: true
    - VK_QUEUE_TRANSFER_BIT: true
- Queue Index: 0
  - Queue count: 1
  - Flags:
    - VK_QUEUE_GRAPHICS_BIT: false
    - VK_QUEUE_COMPUTE_BIT: false
    - VK_QUEUE_TRANSFER_BIT: true
- Queue Index: 0
  - Queue count: 2
  - Flags:
    - VK_QUEUE_GRAPHICS_BIT: false
    - VK_QUEUE_COMPUTE_BIT: false
    - VK_QUEUE_TRANSFER_BIT: true
- Queue Index: 0
  - Queue count: 1
  - Flags:
    - VK_QUEUE_GRAPHICS_BIT: false
    - VK_QUEUE_COMPUTE_BIT: false
    - VK_QUEUE_TRANSFER_BIT: true

**Queue 0 selected**

## PRESENT MODEs

- VK_PRESENT_MODE_MAILBOX_KHR
- VK_PRESENT_MODE_FIFO_LATEST_READY_KHR
- VK_PRESENT_MODE_FIFO_KHR
- VK_PRESENT_MODE_IMMEDIATE_KHR

**PRESENT MODE: VK_PRESENT_MODE_MAILBOX_KHR selected**

## Surface Formats

- VK_FORMAT_A2R10G10B10_UNORM_PACK32, VK_COLOR_SPACE_SRGB_NONLINEAR_KHR
- VK_FORMAT_B8G8R8A8_SRGB, VK_COLOR_SPACE_SRGB_NONLINEAR_KHR
- VK_FORMAT_B8G8R8A8_UNORM, VK_COLOR_SPACE_SRGB_NONLINEAR_KHR
- VK_FORMAT_R8G8B8A8_SRGB, VK_COLOR_SPACE_SRGB_NONLINEAR_KHR
- VK_FORMAT_R8G8B8A8_UNORM, VK_COLOR_SPACE_SRGB_NONLINEAR_KHR
- VK_FORMAT_R16G16B16A16_SFLOAT, VK_COLOR_SPACE_SRGB_NONLINEAR_KHR

**Format: VK_FORMAT_B8G8R8A8_UNORM selected**

## Fun notes!

- **swapchainExtent is equal to uint32_t max!** swapchainExtent: 4294967295

- In Wayland, the window doesn't appear until first draw call! It means I
couldn't test destroy since the only way to close the window was to \<Ctrl-c\>!
