const render = (renderArea, renderText) => {
        const pageContents = document.querySelector(renderArea);
        pageContents.innerHTML = renderText;
}

export default render