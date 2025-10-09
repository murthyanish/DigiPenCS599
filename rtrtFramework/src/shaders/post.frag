
#version 450

layout(set=0, binding=0) uniform sampler2D renderTarget;

layout(location = 0) out vec4 fragColor;


void main()
{
    vec2 uv = gl_FragCoord.xy/vec2(1280, 768);
    // fragColor = vec4(uv, 0, 1);
    fragColor = pow(texture(renderTarget, uv), vec4(1.0/2.2));
}
