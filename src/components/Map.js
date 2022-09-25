import React from 'react';

const Map = () => {
    return (
        <div className='m-h-[60vh]'>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=900&amp;height=400&amp;hl=en&amp;q=Accra&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    <a href="https://mcpenation.com/">MCPE Nation</a>
                </div>
            </div>
        </div>
    );
}

export default Map;
