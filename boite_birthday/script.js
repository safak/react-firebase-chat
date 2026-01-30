const canvasEl = document.querySelector("#fire-overlay");
const scrollMsgEl = document.querySelector(".scroll-msg");

const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
// const devicePixelRatio = 1;

const params = {
  fireTime: 0.35,
  fireTimeAddition: 0,
};

let st, uniforms;
const gl = initShader();

st = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".page",
      start: "0% 0%",
      end: "100% 100%",
      // markers: true,
      scrub: true,
      onLeaveBack: () => {
        // params.fireTimeAddition = Math.min(params.fireTimeAddition, .3);
        // gsap.to(params, {
        //     duration: .75,
        //     fireTimeAddition: 0
        // })
      },
    },
  })
  .to(
    scrollMsgEl,
    {
      duration: 0.1,
      opacity: 0,
    },
    0
  )
  .to(
    params,
    {
      fireTime: 0.63,
    },
    0
  );

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

gsap.set(".page", {
  opacity: 1,
});

function initShader() {
  const vsSource = document.getElementById("vertShader").innerHTML;
  const fsSource = document.getElementById("fragShader").innerHTML;

  const gl =
    canvasEl.getContext("webgl") || canvasEl.getContext("experimental-webgl");

  if (!gl) {
    alert("WebGL is not supported by your browser.");
  }

  function createShader(gl, sourceCode, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, sourceCode);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(
        "An error occurred compiling the shaders: " +
          gl.getShaderInfoLog(shader)
      );
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
  const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);

  function createShaderProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(
        "Unable to initialize the shader program: " +
          gl.getProgramInfoLog(program)
      );
      return null;
    }

    return program;
  }

  const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
  uniforms = getUniforms(shaderProgram);

  function getUniforms(program) {
    let uniforms = [];
    let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < uniformCount; i++) {
      let uniformName = gl.getActiveUniform(program, i).name;
      uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
    }
    return uniforms;
  }

  const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  gl.useProgram(shaderProgram);

  const positionLocation = gl.getAttribLocation(shaderProgram, "a_position");
  gl.enableVertexAttribArray(positionLocation);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  return gl;
}

function render() {
  const currentTime = performance.now();
  gl.uniform1f(uniforms.u_time, currentTime);

  // if (st.scrollTrigger.isActive && st.scrollTrigger.direction === 1) {
  //     params.fireTimeAddition += .001;
  // }

  gl.uniform1f(uniforms.u_progress, params.fireTime + params.fireTimeAddition);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  requestAnimationFrame(render);
}

function resizeCanvas() {
  canvasEl.width = window.innerWidth * devicePixelRatio;
  canvasEl.height = window.innerHeight * devicePixelRatio;
  gl.viewport(0, 0, canvasEl.width, canvasEl.height);
  gl.uniform2f(uniforms.u_resolution, canvasEl.width, canvasEl.height);
  render();
}
