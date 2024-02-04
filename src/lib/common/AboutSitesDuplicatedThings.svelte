<div class="store-container">
    <div class="pagination-controls">
        <button  on:click={goToPreviousPage} type="button">
            <div class="prev-store">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </button>
        <div class="item-container">
            {#if paginatedArray.length > 0 && paginatedArray[currentPage]}

            {#each paginatedArray[currentPage] as row, rowIndex}
                <div class="row">
                    {#each row as item, itemIndex}
                        <div class="item">{item || ''}</div>
                    {/each}
                </div>
            {/each}
            {/if} 
        </div>
        <button  on:click={goToNextPage}>
            <div class="next-store">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </button>
    </div>
</div>