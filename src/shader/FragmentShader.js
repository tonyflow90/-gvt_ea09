export let FragmentShader = `
    precision mediump float;
    
    uniform sampler2D uTexture;

    varying vec2 vTextureCoord;

    void main() {
        vec4 color = texture2D(uTexture, vTextureCoord);
        if(color != vec4(0,0,0,1)) {
            gl_FragColor = texture2D(uTexture, vTextureCoord);
        } else {
            float vStrips = mod(floor(vTextureCoord.s * 36.), 2.);
            float hStrips = mod(floor(vTextureCoord.t * 18.), 2.);			
            float caros = vStrips * hStrips + (1.-vStrips) * (1.-hStrips);
            gl_FragColor = vec4(0,caros,caros,1);
        }
    }
`